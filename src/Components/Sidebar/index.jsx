
import React, { useContext } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, Accordion, AccordionHeader, AccordionBody, } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import well from '../../assets/img/well.jpg'
import { navbar } from "../../utils/router";
import { useLocation, useNavigate } from "react-router-dom";
import { SidebarContext } from "../../Context/Sidebar";
import { IsCoursesContext } from "../../Context/isCourses";
import { PathContext } from "../../Context/Path";
import { VideoIdContext } from "../../Context/VideoId";
import { Icon } from "./style";
import { NextPathContext } from "../../Context/NestedPath";
import axios from "axios";



export default function Sidebar(props) {

  //================== importent  tools ==============================

  const navigate = useNavigate()
  const location = useLocation()
  const { state } = location
  const [iscrs, setIscrs] = useContext(IsCoursesContext)
  const [pathState, setPathState] = useContext(PathContext)
  const [nextpathState, setNextPathState] = useContext(NextPathContext)
  const [, setVideoId] = useContext(VideoIdContext)
  const [open, setOpen] = React.useState(0);
  const [sidebar, setSidebar] = React.useContext(SidebarContext)
  const newNextpathState = nextpathState.replace(/ /ig, "%20")
  const newpathState = pathState.replace(/ /ig, "%20")
  console.log(state, "..... { state } = location");
  // ===================== Asosiy saidbar ko'rinmaydigan shartlar ==============================================================
  (
    location.pathname === `/my_course/${state?.name}`
    || location.pathname === `/my_course/${state?.name}/${pathState}`
    || location.pathname === `/my_course/${state?.name}/${newpathState}/${newNextpathState}`


  ) ? setIscrs(false)
    : setIscrs(true)

  // ===================== Logout  ==============================================================

  const Logout = async () => {
    try {
      const { data } = await
        axios.post('http://127.0.0.1:8000/user/logout/', {
          refresh_token: localStorage.getItem('refresh_token')
        }, { headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' } },
          { withCredentials: true });
      localStorage.clear();
      axios.defaults.headers.common['Authorization'] = null;
      window.location.href = '/account'
    } catch (err) {
      console.log('=====================Teast ===================================', err.response.data)
    }
  }

  //=====================Functional Parts  ===================================


  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const TogSide = () => {
    setSidebar(!sidebar);
    console.log(sidebar)

  }
  const close = () => {
    setSidebar(!sidebar)
  }



  //===================== UI  ===================================

  return (
    <Card className={`block md:${sidebar ? 'block' : 'hidden'} overflow-y-scroll sm:hidden  z-50   rounded-none h-[calc(100vh)] max-w-[20rem] w-full p-4 shadow-xl shadow-blue-gray-900/5 sticky top-0 right-20`} onClick={close}>
      <div className="flex justify-center">

        <div onClick={() => navigate('/')}>
          <img className="h-[90px] w-[90px] border  rounded-full items-center" src={well} alt="no logo" />
        </div>
      </div>
      <List>

        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >


        </Accordion>
        <div className="text-[24px] pt-5 flex justify-center font-semibold">
          Well Project
        </div>


        <div className="flex flex-col justify-between   w-full">

          <div className=" flex flex-col gap-3 items-center  mt-12">
            <div className="font-semibold text-blue-gray-400 flex mr-24">
              main & courses
            </div>
            {
              iscrs ? navbar.map((val) => (!val.bottom_sid && !val.hidden) && (
                <ListItem className=" font-semibold " key={val.id} onClick={() => navigate(val.url)} >
                  <div className=" text-[22px] font-medium" onClick={() => TogSide}>
                  </div>
                  <div className="  "    >
                  </div>
                  <div className="flex gap-12">
                    {val.icon_comp}
                  </div>
                  <div className="pl-7">
                    {val.title}
                  </div>
                </ListItem>
              )) : state?.skill_set.map((val) => (
                <Accordion
                  key={val?.id}
                  onClick={() => {
                    navigate(`my_course/${state?.name}/${val?.name}`, { state })
                    setPathState(val?.name)
                  }

                  }
                  open={open === val?.id}
                  icon={
                    <ChevronDownIcon
                      // onClick={() => {
                      //   navigate(`my_course/${state?.name}/${val?.name}`, { state })
                      //   setPathState(val?.name)
                      // }
                      // }
                      strokeWidth={2.5}
                      className={`mx-auto h-4 w-4 transition-transform ${open === val.id ? "rotate-180" : ""}`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={open === val?.id}>
                    <AccordionHeader onClick={() => handleOpen(val?.id)} className="border-b-0 p-3">
                      <ListItemPrefix>
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="mr-auto font-normal">
                        <ListItem className="flex  gap-1 font-semibold" onClick={() => {
                          navigate(`my_course/${state?.name}/${val.name}`, { state })
                          setPathState(val?.name)
                        }
                        }
                        >
                          <div className=" text-[22px] font-medium"    >
                            {val.icon_comp}
                          </div>
                          <Icon.Main icon={val.icons} />
                          {val?.name}
                        </ListItem>
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      {
                        val?.videomaterial_set.map((value) => (

                          <ListItem
                            key={val?.id}
                            onClick={(e) => {
                              e.stopPropagation()
                              navigate(`my_course/${state?.name}/${val.name}/${value?.name}`, { state })
                              setVideoId(value)
                              setPathState(val?.name)
                              setNextPathState(value.name)
                              console.log(value, "--??== Value ==?? --")
                            }
                            }>
                            <ListItemPrefix >
                              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix >

                            {value?.name}
                          </ListItem>
                        ))
                      }
                    </List>
                  </AccordionBody>
                </Accordion>
              ))
            }




          </div>

          <div className="flex flex-col mt-7">
            <div className="font-semibold text-blue-gray-400 flex ml-7">
              Back
            </div>
            {navbar.map((val) => val.bottom_sid && (

              <ListItem
                key={val?.id}
                className="flex  gap-7 font-semibold" onClick={
                  () => {
                    navigate(`/${val.url}`);
                    val.url === "account" && Logout()
                  }
                }>
                <div className=" text-[22px] font-medium">

                  {val.icon_comp}
                </div>
                {val.title}
              </ListItem>
            ))}
          </div>
        </div>


      </List>
    </Card>
  );
}