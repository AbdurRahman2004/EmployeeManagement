import Employee from "../models/Employee.js"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import multer from "multer"
import path from "path"


const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,"public/uploads")
    },
    filename: (req,file,cb) => {
        cb(null , Date.now() + path.extname(file.originalname))
    }
})

const upload = multer ({storage : storage})

const addEmployee = async (req,res)=>{
    try{
   const {name , email,employeeId,dob,gender,maritalStatus , designation , department , salary , password , role } = req.body;
   console.log(req.body);




   const user = await User.findOne({email})
   if(user){
    return res.status(400).json({success: false, error : "User already registered in emp"})
   }

    const hashPassword = await bcrypt.hash(password,10)
      
    console.log('Uploaded file:', req.file);
    const newUser = new User({
        name,
        email,
        password: hashPassword,
        role,
        profileImage : req.file? req.file.filename : ""
    })

    const savedUser = await newUser.save()

    const newEmployee = new Employee({
      userId : savedUser._id,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      salary
    })

   await newEmployee.save()
   return res.status(200).json({success : true , message : "employee created"})
}
catch(error){
    console.error("Server error:", error); 
    return res.status(500).json({success:false, error :"server error in emp" })
}

   }


   const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
            .populate('userId', { password: 0 })  // Don't return password
            .populate('department');
        return res.status(200).json({ success: true, employees });
    } catch (error) {
        console.error("Get Employees Error:", error); 
        return res.status(500).json({ success: false, error: "Get Employees server error" });
    }
};



export {addEmployee , upload , getEmployees}