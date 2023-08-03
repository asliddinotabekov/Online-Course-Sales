import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function MyCards(props) {
  //=======================Importent tools  ======================================================
  const navigate = useNavigate()
  const [datas, setData] = useState([])

  //======================= Get Data from Backend  ======================================================

  useEffect(() => {
    fetch("http://127.0.0.1:8000/course/course_list/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res))

  }, [])

  //======================= UI  ======================================================

  return (
    <>
      {
        datas?.map((val) => {
          return (
            <div className="" key={val?.id}>
              <Card className=" w-full shadow-lg h-[400px] md:h-[380px] text-[18px] md:text-[7px] sm:w-full sm:h-[380px] " key={val.id}>
                <CardHeader floated={false} color="blue-gray">
                  <img className="w-full h-48 md:h-32"
                    src={val?.image}
                    alt="ui/ux review check"
                  />
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                  <IconButton size="sm" color="red" variant="text" className="!absolute top-4 right-4 rounded-full">
                    <HeartIcon className="h-6 w-6" />
                  </IconButton>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray" className="font-medium">
                      {val.description}
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                      {val.cost}
                    </Typography>
                  </div>
                  <Typography color="gray" className=" text-[18px] md:text-[14px]">
                    <div className="mr-3  whitespace-nowrap overflow-hidden pr-12"> Enter a freshly updated and thoughtfully furnished
                    </div>

                  </Typography>

                </CardBody>
                <CardFooter className="pt-0 flex flex-col gap-2" >
                  <Button size="lg" fullWidth={true} className="md:pt-[0.2em] md:pb-[0.rem] py-2">
                    More read
                  </Button>
                  <div>
                    <Button size="lg" fullWidth={true} className="md:pt-[0.5rem] md:pb-[0.5rem] py-2" onClick={() => navigate(`${val.name}`, { state: val })}>
                      Now Buy
                    </Button>
                  </div>
                  {/* </div> */}
                </CardFooter>
              </Card>
            </div>
          )
        }
        )
      }
    </>

  );
}


// ========================================useEffect old data ======================================================================
// fetch(
//   ` ://192.168.0.152:8000/course/purchased_course?${request_parse}${request}`, {
//   method: "GET",
// headers: {
//   Authorization: `Token ${localStorage.getItem("token")}`,
//   },
// }
// ).then((res) => res.json())
//   .then((res) => { setData(res) })
//   .then((res) => { console.log(datas, "Responssssssssssssssssssssssssssssss") })

// ========================================useEffect old data ======================================================================
// let request = localStorage.getItem("usr")
// let request_parse = (new URLSearchParams("username")).toString()