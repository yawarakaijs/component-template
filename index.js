// Dependecies
let Compo = require('../../../component')

// Component Method
// Inner

exports.scenes = {
    async scenePerformFunction(context) {

    }
}

exports.commands = {
    async main(context) {

    }
}

exports.inlines = {
    async main (ctx) {

    }
}

exports.messages = {
    async main(ctx) {

    }
}

exports.callbackQuery = {
    async main (context) {

    }
}

exports.channelPost = {
    async main (context) {

    }
}

// Register

exports.register = {
    // As the example to Yawarakai Compos
    commands: [
        {
            // function: 'main'
        }
    ],
    inlines: [
        {
            // function: "main"
        }
    ],
    messages: [
        // {
            // function: 'main'
        // }
    ],
    callbackQuery: [
        // {
        //     function: 'main'
        // }
    ],
    channelPost: [
        // {
        //     function: 'main'
        // }
    ],
    scenes: [
        // {
        //     name: 'sceneName',
        //     function: 'scenePerformFunction'
        // }
    ]
}