
cc.Class({
    extends: cc.Component,

    properties: {

        btn_node: {
            default:null,
            type: cc.Node
        },

        lbl_num: {
            default:null,
            type: cc.Node
        },

        img_1: {
            default:null,
            type: cc.Node
        },

    },

    onLoad () {
        this.btn_node.on("touchend", ()=>{
            cc.log("点击")
            let path = 'kitty/res/ui/bg_rule_1'
            cc.loader.loadRes(path, cc.SpriteFrame, (err, asset)=>{
                if(err){
                    cc.log(err)
                }else{
                    this.img_1.getComponent(cc.Sprite).spriteFrame = asset
                }
            })
        }, this)

        // this.lbl_num.getComponent(cc.Label).string = 0
    },

    start () {
        cc.log("2222222222222222222222222222222222222")
        // this.lbl_num.getComponent(cc.Label).string = 0
    },

    click_func(){
        cc.log("3333333333333333333333333333333333333")

        cc.log("点ssss击")
    },

});
