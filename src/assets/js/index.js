export default function MyPlug(){
    this.date = "20201215";
    this.author = "yangzeng";
    this.description = "用于公共组件的处理";
}

MyPlug.prototype.log = function(){
    console.log(this.description);
}