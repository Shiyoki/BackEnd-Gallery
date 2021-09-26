import mongoose from 'mongoose'


const postSchema = mongoose.Schema({
    title: String,
    description: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    filename: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

postSchema.methods.setImgUrl = function setImgUrl (filename){
this.selectedFile = `${process.env.HOST}:${process.env.PORT}/public/${filename}`

}


const Information = mongoose.model('Information', postSchema);

export default Information;
