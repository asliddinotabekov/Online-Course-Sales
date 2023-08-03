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
} from "@heroicons/react/24/solid";
import { Navigate, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/router";
import useRequest from "../../hooks/useRequest";

import { useEffect, useState } from "react";
export default function Cards(props) {
  const navigate = useNavigate()
  const [datas, setData] = useState([])
  const purchased_by = localStorage.getItem("usr")
  const request = useRequest()
  useEffect(() => {
    request({ url: "course/course_list/", token: true }).then((res) => setData(res))
  }, [])

  const handleClick = ({ id: purchased_course }) => {
    fetch(
      `${"http://127.0.0.1:8000/course/course_list/"}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ purchased_by, purchased_course, }),
    }
    ).then((res) => res.json());
  }

  const detailClick = ({ id }) => {
    console.log(id, ">>>>>>>>>>>>===============================");
    fetch(
      `http://127.0.0.1:8000/course/course_list/${id}/`, {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },

    }
    ).then((res) => res.json());
  }

  console.log(datas)
  return (
    <>
      {/* navbar[1].children */}
      {datas.map((val) => {
        return (
          <Card className=" w-full shadow-lg h-[400px] md:h-[380px] text-[18px] md:text-[7px] sm:w-full sm:h-[380px] " key={val.id}>
            <CardHeader floated={false} color="blue-gray">
              <img className="w-full h-48 md:h-32"
                src={val.course_image}
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              <IconButton
                size="sm"
                color="red"
                variant="text"
                className="!absolute top-4 right-4 rounded-full"
              >
                <HeartIcon className="h-6 w-6" />
              </IconButton>
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className="font-medium">
                  {val.course_description}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="flex items-center gap-1.5 font-normal"
                >
                  <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
                  {val.course_cost}
                </Typography>
              </div>
              <Typography color="gray" className=" text-[18px] md:text-[14px]">
                <div className="mr-3  whitespace-nowrap overflow-hidden pr-12"> Enter a freshly updated and thoughtfully furnished
                </div>

              </Typography>

            </CardBody>
            <CardFooter className="pt-0 flex flex-col gap-2" >
              <Button size="lg" fullWidth={true} className="md:pt-[0.2em] md:pb-[0.rem] py-2"
                onClick={() => {
                  detailClick(val);
                  navigate(`/courses/${val.id}`, { state: val })
                }}
              >
                More read
              </Button>
              <div>
                <Button size="lg" fullWidth={true} className="md:pt-[0.5rem] md:pb-[0.5rem] py-2" onClick={() => handleClick(val)}>
                  Now Buy
                </Button>
              </div>
              {/* </div> */}
            </CardFooter>
          </Card>
        )
      }
      )}
    </>

  );
}
