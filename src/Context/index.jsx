import React from 'react'
import { IsCoursesProvider } from './isCourses'
import { RouteFunctionProvider } from './RouteFunction'
import SidebarProvider from './Sidebar'
import { PathProvider } from './Path'
import { VideoIdProvider } from './VideoId'
import { NextPathProvider } from './NestedPath'
import { VideoSelf } from './VideoSelf'
function Context({ children }) {
  return (
    <SidebarProvider>
      <IsCoursesProvider>
        <RouteFunctionProvider>
          <PathProvider>
            <NextPathProvider>
              <VideoIdProvider>
                <VideoSelf>
                  {children}
                </VideoSelf>
              </VideoIdProvider>
            </NextPathProvider>
          </PathProvider>
        </RouteFunctionProvider>
      </IsCoursesProvider>
    </SidebarProvider>
  )
}

export default Context
