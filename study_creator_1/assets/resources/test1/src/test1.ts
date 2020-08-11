// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    assets: any[];
    list_sprite_frame: string[];

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.load_gold_res()
    }

    load_gold_res() {
        let list_sprite_frame = []
        // for (let index = 1; index <= 27; index++) {
        //     if (index <= 9) {
        //         list_sprite_frame[index - 1] = 'test1/res/dps_attack_e0' + index + '_ani'
        //     } else {
        //         list_sprite_frame[index - 1] = 'test1/res/dps_attack_e' + index + '_ani'
        //     }
        // }
        for (let index = 1; index <= 8; index++) {
            list_sprite_frame[index - 1] = 'test1/res/123/' + index
        }


        cc.loader.loadResArray(list_sprite_frame, cc.SpriteFrame, (err, assets) => {
            if (err) {
                console.log(err);
                return;
            }
            this.assets = assets;
            this.add_gold_ani(this.node)
        });
        this.list_sprite_frame = list_sprite_frame;
    }

    // 添加金币动画
    add_gold_ani(parent) {
        let assets = this.assets;
        let node = new cc.Node();
        node.parent = parent;
        node.addComponent(cc.Sprite).spriteFrame = assets[0];
        let ani = node.addComponent(cc.Animation);
        let arr3 = [];
        let arrLength = this.list_sprite_frame.length;
        let idx = Math.floor(Math.random() * (arrLength - 1));
        for (let j = idx; j < arrLength + idx; j++) {
            arr3.push(assets[j % arrLength]);
        }
        let clip = cc.AnimationClip.createWithSpriteFrames(arr3, arr3.length);
        clip.name = 'ani';
        clip.wrapMode = cc.WrapMode.Loop;
        ani.addClip(clip);
        ani.play('ani');
        return node;
    }
    // update (dt) {}
}
