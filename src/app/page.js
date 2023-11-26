'use client'


import BannerSection from "./components/bannersection"
import BrowseSection from "./components/browsesection"
import AuctionSection from "./components/auctionsection"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getUserAccount } from "@/services/userService"
import { useRouter } from "next/navigation"
import { loginRedux } from "@/redux/actions/loginAction"

export default function Home() {

  const dispatch = useDispatch()
  const info = useSelector((state) => state.personalInfo)

  const fetchUser = async () => {
    let res = await getUserAccount()
    if (res && res.EC === 0 && res.DT) {
      let data = {
        isAuthenticated: true,
        token: res.DT.access_token,
        account: {
          name: res.DT.name,
          address: res.DT.address,
          avatar: res.DT.avatar,
          email: res.DT.email,
          gender: res.DT.gender,
          roles: res.DT.roles
        }
      }
      dispatch(loginRedux(data))
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  console.log(info)

  return (
    <div>

      <BannerSection />
      <BrowseSection />
      <AuctionSection />


    </div>
  )
}
