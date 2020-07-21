// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    //定义属性
    properties: {
        btn_start: {
            default: null, //赋值
            type: cc.Node //类型，Node必须大些，否则会报错，这是一个组件
        },
        image_1: {
            default: null,
            type: cc.Node
        },
        btn_left: {
            default: null, //赋值
            type: cc.Node //类型，Node必须大些，否则会报错，这是一个组件
        },
        btn_right: {
            default: null, //赋值
            type: cc.Node //类型，Node必须大些，否则会报错，这是一个组件
        },
        lab_page: {
            default: null, //赋值
            type: cc.Node //类型，Node必须大些，否则会报错，这是一个组件
        }
    },
    // LIFE-CYCLE CALLBACKS:
    //加载时就要执行的操作
    onLoad() {
        this.image_rule = 1
        //写法：this.对应的UI控件（比如说：按钮，列表，复选框等等 ；需要去调用Node组件，所以必须“.node” 去监听“on” 括号中需要的参数：监听的操作是什么，监听到这个操作做出来什么反应，this）
        //5.调用方法：方法名（）意思是我要去执行这个方法    ；如果只是调用 ，让他去执行，那么就是： 方法名
        // this.btn_start.on(cc.Node.EventType.TOUCH_START, this.touch_start, this)
        // this.btn_start.on(cc.Node.EventType.TOUCH_MOVE, this.touch_move, this)
        // this.btn_start.on(cc.Node.EventType.TOUCH_END, this.touch_end, this)
        // this.btn_left.on(cc.Node.EventType.TOUCH_END, this.touch_end, this)
        this.btn_right.on(cc.Node.EventType.TOUCH_END, this.btnRight_loadImage, this)
        this.btn_left.on(cc.Node.EventType.TOUCH_END, this.btnLeft_loadImage, this)
    },

    start() {
        // let bbb = 1
        // let aaa = "rule/res/ui/bg_rule_"
        // let ccc = aaa + bbb
        // cc.log(ccc, "cccccccccccccc")
        // this.touch_end()
    },
    //在COCOS封装的类中，方法写法
    touch_start() {
        cc.log("+++++++++++++++点击了")
    },

    touch_move() {
        cc.log("++++++++++在移动22")
    },
    btnLeft_loadImage() {
        cc.log("++++++++++++++++++++++++++++")
        if (this.image_rule > 1) {
            this.image_rule = this.image_rule - 1
        } else {
            cc.log("_______hshsxaaaaaaaaaaau")
            this.image_rule = 7
        }
        let path = "rule/res/ui/bg_rule_" + this.image_rule
        let change_image = (err, asset) => {
            if (err) {
                cc.log(err)
            } else {
                this.image_1.getComponent(cc.Sprite).spriteFrame = asset
            }
        }
        cc.loader.loadRes(path, cc.SpriteFrame, change_image) //加载图片资源的方法（）
        this.lab_page.getComponent(cc.Label).string = this.image_rule
        cc.log(this.lab_page.getComponent(cc.Label).string + "-----------------------")
    },
    btnRight_loadImage() {
        cc.log("++++++++++++++++++++++++++++")
        if (this.image_rule < 7) {
            this.image_rule = this.image_rule + 1
        } else {
            this.image_rule = 1
        }
        let path = "rule/res/ui/bg_rule_" + this.image_rule
        let change_image = (err, asset) => {
            if (err) {
                cc.log(err)
            } else {
                this.image_1.getComponent(cc.Sprite).spriteFrame = asset
            }
        }
        cc.loader.loadRes(path, cc.SpriteFrame, change_image)
        this.lab_page.getComponent(cc.Label).string = this.image_rule
        cc.log(this.lab_page.getComponent(cc.Label).string + "-----------------------")
    },
    // update (dt) {},
});