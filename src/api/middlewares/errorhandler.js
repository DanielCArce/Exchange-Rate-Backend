export async function ErrorHandler(err,req,res,next){

    res.json({message:err.message,status:500})
}