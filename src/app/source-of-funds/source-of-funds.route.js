import express from 'express'
import {promptWithBackground} from "../common/llm.js"
import {PromptTemplate} from "langchain/prompts"
import {
    sourceoffundsPrompt,
} from "./source-of-funds.prompt.js"
import {cacheMiddleware} from "../common/caching.js";

const router = express.Router()

const sourceoffunds = {
    information: "sourceoffunds",
    prompt: PromptTemplate.fromTemplate(sourceoffundsPrompt),
    question: `What for source of funds did the person get or attend?`,
    entries: 10
}

router.post('/sourceoffunds/sourceoffundsNew', cacheMiddleware(5), async (req, res) => {
    await process(req, res, [cash, transfer, realestate, donation], 'sourceoffunds')
})

router.post('/sourceoffunds/sourceoffunds', cacheMiddleware(5), async (req, res) => {
    await process(req, res, [cash], 'cash')
})

async function process(req, res, promptGroup, endpointName) {
    const {partnerId} = req.body
    if (partnerId) {
        await promptWithBackground(partnerId, res, endpointName, promptGroup)
    } else {
        res.status(400).json({
            "message": "Missing property: partnerId"
        })
    }
}

export {
    router
}
