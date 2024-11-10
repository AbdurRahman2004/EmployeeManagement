import Employee from "../models/Employee.js"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import multer from "multer"
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

// Manually create __dirname
// Manually create __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the upload path
const uploadPath = path.join('/tmp', 'uploads');

// Ensure the uploads directory exists within /tmp
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath); // Store the file in public/uploads
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Name the file with a timestamp
    }
  });
  
  const upload = multer({ storage: storage });


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

    const uploadedFileUrl = req.file ? `/uploads/${req.file.filename}` : "";
    const newUser = new User({
        name,
        email,
        password: hashPassword,
        role,
        profileImage : uploadedFileUrl
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

            console.log(employees);
            if (employees.userId.profileImage) {
                employees.userId.profileImage = `/uploads/${employee.userId.profileImage.split('/').pop()}`;
              }
        return res.status(200).json({ success: true, employees });
    } catch (error) {
        console.error("Get Employees Error:", error); 
        return res.status(500).json({ success: false, error: "Get Employees server error" });
    }
};



const getEmployee = async (req, res) => {
    const {id} = req.params;
    try {
        let employee;
         employee = await Employee.findById({_id:id})
            .populate('userId', { password: 0 })  // Don't return password
            .populate('department');

        if(!employee){
           employee =  await Employee.findOne({ userId : id})
           .populate('userId', { password: 0 })  // Don't return password
           .populate('department');
        }
        console.log(employee)
        return res.status(200).json({ success: true, employee });
    } catch (error) {
        console.error("Get Employees Error:", error); 
        return res.status(500).json({ success: false, error: "Get Employees server error" });
    }
};


const updateEmployee = async (req, res) => {

    try {
        const {id} = req.params;
        const { name , maritalStatus , destination , department,salary} = req.body;
        const employee = await Employee.findById({_id : id})
        if(!employee){
            return res .status(404).json({success:false , error: "Employee not found "})
        }

        const user = await User.findById({_id :employee.userId})
        if(!user){
            return res .status(404).json({success:false , error: "User not found "})
        }

        const updateUser = await User.findByIdAndUpdate({_id : employee.userId}, {name})
        const updateEmployee = await Employee.findByIdAndUpdate({_id : id},{
            maritalStatus,destination,salary , department
        })

        if(!updateUser || !updateEmployee){
            return res .status(404).json({success:false , error: "Document not found "})
        }

        return res.status(200).json({success : true , message : " Employee Update" })

    } catch (error) {
        return res.status(500).json({ success: false, error: "Update Employees server error" });
    }
};


const fetchEmployeesDepId = async (req,res) => {
    const {id} = req.params;
    try {
        const employees = await Employee.find({department:id})

        return res.status(200).json({ success: true, employees });
    } catch (error) {
        console.error("Get Employees by DepId Error:", error); 
        return res.status(500).json({ success: false, error: "Get employeesbyDepId server error" });
    }
}


export {addEmployee , upload , getEmployees , getEmployee , updateEmployee , fetchEmployeesDepId}