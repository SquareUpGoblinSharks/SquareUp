import React, {useEffect} from "react";
import client from "./client";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";


const useAuth = (navigateSuccess, navigateFailure) => {
  const navigate = useNavigate()
  
  const [cookies, setCookie, removeCookie] = useCookies(['ssid']);
  const ssid = cookies['ssid']
  const handles = {};
  const standardDelay = 2500

  //add handles to hook return
  handles.clearCookie = () => {removeCookie('ssid')}
  handles.debug = () => {return {ssidCookie: cookies.ssid, navigateSuccess, navigateFailure}};
  handles.success = (path) => {
    if (!path && navigateFailure) navigateWrapper(navigateSuccess)
    else {return navigateWrapper(path)}};
  handles.failure = (path) => {
    if (!path && navigateSuccess) navigateWrapper(navigateFailure, true)
    return navigateWrapper(path, true)};
  
  const navigateWrapper = (path, clearCookies) => {
    if (path) {
      if (clearCookies) handles.clearCookie();
      return setTimeout(navigate(path), standardDelay);
    } else {
      return;
    }
  };


  useEffect(()=>{
    if (navigateFailure || navigateSuccess) {
      client.get('/verifyCookie')
        .then(resp => {
          if(resp.data.verified) {
            navigateWrapper(navigateSuccess);
          } else {
            navigateWrapper(navigateFailure, true);
          }
        })
        .catch(err => {
          console.log('error was caught', err.response.data)
          navigateWrapper(navigateFailure, true);
        })
    }
  },[ssid])

  
  return handles;

};

export default useAuth;