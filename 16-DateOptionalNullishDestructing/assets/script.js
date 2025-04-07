// task 1

let date = new Date
console.log(date);




// task2 

const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
      email: "farid.ali@example.com",
      phone: "555-1234",
      emergencyContact: {
        name: "Far For",
        relation: "Spouse"
      }
    }
  };
  let { name, department, contact: { email, phone , emergencyContact: {name:FarFor , relation:spouse} } } = employee;

  console.log(name, department, email, phone , FarFor , spouse);



//   taskk3

const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsasları",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30]      
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];

let [, {id , title , author , stats : [a,b,c]} , ] = apiResponse
console.log(`Məqalə: ${title}, Müəllif: ${author}, ${a} oxunma, ${b} bəyənmə, ${c} şərh`);
  

// takssdss4


function renderUserProfile(userData) {
  
    
    //  İstifadəçi adı (default: "Qonaq")
    //  Profil şəkli URL (default: "/default-avatar.png")
    //  Bio məlumatı (default: "Məlumat yoxdur")
    //  Əlaqə emaili (default: "təyin edilməyib")
    //  Premium statusu (default: false)
    
     return {
    username: userData?.user?.username ?? "Qonaq",
    
    avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
    
    bio: userData?.user?.profile?.bio ?? "Məlumat yoxdur",
    
    email: userData?.user?.contact?.email ?? "təyin edilməyib",
    
    premium: userData?.user?.account?.premium ?? false
     };
   }
   
//    Test cases
   console.log(renderUserProfile({
     user: {
       username: "tahir2023",
       profile: {
         avatar: "/users/tahir.jpg",
         bio: "JavaScript developer",
       },
       contact: {
         email: "tahir@example.com"
       },
       account: {
         premium: true
       }
     }
   }));
   
   console.log(renderUserProfile({
     user: {
       username: "aynur",
       profile: {
         bio: ""
       },
       contact: {}
     }
   }));
   
   console.log(renderUserProfile({
     user: {
       username: null
     }
   }));
   
   console.log(renderUserProfile({}));
