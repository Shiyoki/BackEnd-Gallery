import Information from '../models/postModel.js'


//Get all post
export const getPosts = async (req, res) =>{
    try{
        const posts = await Information.find();
        console.log(posts)
        res.json(posts);
   } catch (err){
       res.json({ message:err });
   }
}

//Create post
export const createPost = async (req, res) =>{
    
    const post = new Information({
        title: req.body.title,
        description: req.body.description,
        selectedFile: req.body.selectedFile,
        creator: req.body.creator,
        tags: req.body.tags
        
    });

    if(req.file){
     const {filename} = req.file
     post.setImgUrl(filename)
    }

    try{
        const savedPost = await post.save()
        res.json(savedPost);
    }catch(err){
        res.json({ message: err });
    }
}

//Update post
export const updatePost = async(req, res)=>{
   try{
       const updatePost = await Information.updateMany(
           { _id: req.params.id},
           { $set: { title: req.body.title,
                     description: req.body.description,
                     creator: req.body.creator }},
           
       );
       res.json(updatePost);
   }catch(err){
       res.json({message: err})
   }
}

//Delete post
export const deletePost = async(req, res)=>{
    try{
        const removedPost = await Information.remove({ _id: req.params.id})
        res.json(removedPost)
    }catch(err){
        res.json({ message: err })
    }
}

export const getPostId = async(req, res)=>{
    try{
        const post = await Information.findById(req.params.id);
        res.json(post)
    }catch(err){
        res.json({message:err});
    }
}