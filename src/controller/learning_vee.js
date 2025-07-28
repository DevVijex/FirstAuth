// const User = require('./models.
// const Car = require()

// const addCar = async (req, res) =>{
//     const {make, model, brand } = req.body;
//     const id = req.user.id;
//     if(!make || !model || !brand){
//         return res.status(400).json({message:"All fields required"})
//     }
//     try{
//         const user = await User.findById(id);
//         if(user.Admin !==true){
//             return res.status(403).json({message:"Only Admins can add cars"})
//         }
//         const newCar = new Car({
//             make,
//             model,
//             brand
//         })
//         await newCar.save();
//         return res.status(200).json({message:"Successfully Created!"});
//     } catch(error){
//         console.log('Error adding car:', error);
//         return res.status(500).json({message:"Internal Server Error"})
//     }
// };

// const editCar = async (req, res)=>{
// const {carId} = req.params;
// const id = req.user.id;
// const {make, model, brand} = req.body;
// try{
//     const user = await User.findById(id);
//     if(user.Admin !== true){
//         return res.status(400).json({message: 'Only admin can add cars'})
//     }
//     const car = await Car.findById(carId);
//     if(!car){
//         return res.status(404).json({message:"Car not found!"})
//     }
//     car.make = make || car.make;
//     car.model = model || car.model;
//     car.brand = brand || car.brand;
//     await car.save();
//     return res.status(200).json({message:"car updated"});
// } catch (error){
//     console.log('error updating car:', error);
//     return res.status(500).json({message:'Internal server error'})
// }
// }

// const deleteCar = async (req, res) =>{
//     const {carId} = req.params;
//     const id = req.user.id;
// try{
//     const user = await User.findById(id);
//     if(user.Admin !== true){
//         return res.status(403).json({message:'Only admin'});
//     }
//     const car = await Car.findByIdAndDelete(carId);
//     if(!car){
//         return res.status(404).json({message:'Car not found!'});
//     }
//     return res.status(200).json({message:'Car deleted successfully'});
// } catch(error){
//     console.log('Error deleting car', error)
//         return res.status(500).json({message:'Internal server error'});
//     }
// }


// const getAllCars = async (req, res) =>{
//     try{
//         const cars = await Car.find();
//         return res.status(200).json({cars});
//     }catch(error){
//         console.log('Errror fetching cars',error)
//         return res.status(500).json({message:'Internal server errror'})
//     }
// }

// const searchCars = async (req, res)=>{
// const {make} = req.query;
//     try{
//         const car = await Car.find({make:make});
//         if(!car){
//             return res.status(404).json({message:'Car not Found!'})
//         }
//         return res.status(200).json({message:"Car found!"})
//     } catch (err){
//         console.error("Error searching cars:", err);
//     return res.status(500).json({ message: "Internal Server Error" });
//     }
// };


// module.exports = {

// }