"use strict";
cc._RFpush(module, 'fe13c6ji91IGKAaD1cGpfSK', 'Dirt');
// scripts\gamefield\blocks\Dirt.js

var BlockType = require('Types').BlockType;
var PlayerMovementState = require('States').PlayerMovementState;

cc.Class({
    'extends': cc.Component,

    properties: {
        isBlocked: false,
        hasItem: false,

        blocktype: {
            'default': BlockType.None,
            type: BlockType
        },

        item: {
            'default': null,
            type: cc.Node
        }

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.playerOnTop = false;
    },

    onStepCallback: function onStepCallback(player, game) {
        cc.log('M: onStepCallback Dirt');
    },

    collide: function collide() {}

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();