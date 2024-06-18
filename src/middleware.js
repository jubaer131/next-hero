// import { NextRequest, NextResponse } from 'next/server'

 
// export const middleware = (request)=> {
//   return NextResponse.redirect(new URL('/about', request.url))
// }
 

// export const config = {
//   matcher: '/dashboard',
// }


import { NextRequest, NextResponse } from 'next/server'

//  const user = true
// This function can be marked `async` if using `await` inside


export const middleware = (request)=> {

  const  cookie = request.cookies.get('token')
  console.log(cookie)
  if(!cookie){
    return NextResponse.rewrite(new URL('/login', request.url))
  }
  return NextResponse.next()

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about',]
}