import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  StarIcon,
  HeartIcon,
  // Square3Stack3DIcon,
  // UserCircleIcon,
  // Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import { navbar } from "../../utils/router";
import React from "react";
import { useContext } from "react";
import { IsCoursesContext } from "../../Context/isCourses";
const purchased_by = localStorage.getItem("usr")


export default function In_Card() {

  const handleClick = (id) => {
    fetch(
      `http://192.168.0.152:8000/course/purchased_course/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ purchased_by, purchased_course: id, }),
    }
    ).then((res) => res.json());
  }

  const [iscrs, setiscrs] = useContext(IsCoursesContext)
  console.log(iscrs)
  const params = useParams()
  console.log(params, "params")
  const location = useLocation()
  // const [olindi , setOlindi] =useState()
  const navigate = useNavigate()
  // console.log(props.route, 'props');
  console.log(navigate, 'navigae');
  console.log(location, 'location');


  const { state } = location
  console.log(state, "Mana");
  return (
    <>
      {
        <div className="flex  flex-1 mt-2    justify-center      ">
          <Card className="   shadow-lg  ">
            <CardHeader floated={false} color="blue-gray">
              <IconButton size="sm" color="red" variant="text" className="!absolute top-4 right-4 rounded-full" >
                <HeartIcon className="h-6 w-6" />
              </IconButton>
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-center sm:flex-col">

                <Typography variant="h5" color="blue-gray" className="font-[900] text-brown-300 ">
                  {state.course_name}
                </Typography>

                <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal  pl-16" >
                  <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700 " />
                  <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700 " />
                  <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700 " />
                  <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700 " />
                  <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700 " />
                </Typography>

              </div>

              <div className=" ">
                <div className="flex md:flex-col sm:flex-col ">
                  <section className="w-[570px] md:w-full sm:w-full ">

                    <Card className="mt-6 w-[570px] md:w-full sm:rounded-none md:rounded-none h-40 sm:w-full">
                      <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                          {state.course_name} To'liq Kurslari
                        </Typography>
                        <Typography>
                          The place is close to Barceloneta Beach and bus stop just 2 min by walk
                          and near to &quot;Naviglio&quot; where you can enjoy the main night life
                          in Barcelona.
                        </Typography>
                      </CardBody>

                    </Card>


                  </ section>

                  <div>
                    <Card className="shadow-lg sm:rounded-none md:rounded-none">
                      <CardHeader floated={false} color="blue-gray">
                        <img className="w-full h-56 md:h-96" src={state.course_image} alt="ui/ux review check" />
                        <IconButton size="sm" color="red" variant="text"
                          className="!absolute top-4 right-4 rounded-full"
                        >
                          <HeartIcon className="h-6 w-6" />
                        </IconButton>
                      </CardHeader>
                      <CardBody className="px-6 py-0 pt-0">
                        <div className=" flex items-center justify-between pt-6">
                          <Typography variant="h5" color="blue-gray" className="font-[900]">
                            Narxi
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="flex items-center  font-semibold text-[18px] "
                          >
                            {state.course_cost}
                          </Typography>
                        </div>
                        <Typography color="gray">


                        </Typography>

                      </CardBody>
                      <CardFooter className="pt-0">
                        <div >
                          <Button size="lg" fullWidth={true}
                            // onClick={() => navigate(`${val.id}`, {state: })}
                            onClick={() => handleClick(params.id)}
                          >
                            Now Buy
                          </Button>
                        </div>


                      </CardFooter>
                      <div className="flex  flex-col justify-center">


                        <div className=" flex items-center justify-between  pb-2
          px-6">

                          <Typography variant="h5" color="blue-gray" className="font-semibold">
                            Umumiy xonalar
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="flex items-center  font-medium text-[18px] "
                          >
                            12
                          </Typography>
                        </div>

                        <hr className="pb-2" />

                        <div className=" flex items-center justify-between pb-2
          px-6">
                          <Typography variant="h5" color="blue-gray" className="font-semibold flex items-center">
                            <span>Vannalar</span>
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="flex items-center  font-medium text-[18px]  pl-[150px]"
                          >
                            24
                          </Typography>


                        </div>
                        <hr className="pb-2" />

                        <div className=" flex items-center justify-between  pb-2
          px-6">

                          <Typography variant="h5" color="blue-gray" className="font-semibold">
                            Xonalar
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="flex items-center  font-medium text-[18px]  pl-[150px]"
                          >
                            full
                          </Typography>
                        </div>

                        <hr className="pb-2" />

                        <div className=" flex items-center justify-between pb-2 
          px-6">
                          <Typography variant="h5" color="blue-gray" className="font-semibold">
                            Hajmi
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="flex items-center  font-medium text-[18px]  pl-[150px]"
                          >
                            Ingliz
                          </Typography>


                        </div>
                        <hr className="pb-2" />

                        <div className=" flex items-center justify-between pb-2
          px-6">
                          <Typography variant="h5" color="blue-gray" className="font-semibold">
                            Status
                          </Typography>
                          <Typography
                            color="blue-gray"
                            className="flex items-center  font-medium text-[18px]  pl-[150px]"
                          >
                            Sertficat Bor
                          </Typography>


                        </div>


                      </div>
                    </Card>
                  </div>

                </div>




              </div>
            </CardBody>
            <CardFooter className="pt-12">



            </CardFooter>
          </Card>
        </div>
      }
    </>
  );
}
// <div >
//     <h1 className="pt-8 font-[900] text-[28px] ">Malumot</h1>
//   <Typography className=" text-[20px] font-semibold pt-2 text-black" >
//   {val.long}
//   </Typography>
//     </div>
{/* <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs> */}