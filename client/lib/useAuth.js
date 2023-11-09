import React, {useEffect, useState} from "react";
import client from "./client";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import { assignToken } from '../state/userSlice';
import { useDispatch } from "react-redux";


const useAuth = (navigateSuccess, navigateFailure) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [_userState, _setUserState ] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['ssid']);
  const ssid = cookies['ssid']
  const handles = {};
  const standardDelay = 2500

  //add handles to hook return
  handles.clearCookie = () => {removeCookie('ssid')}
  handles.setCookie = (value) => {setCookie('ssid', value)}
  handles.ssid = ssid;
  handles.userState = _userState;
  handles.debug = () => {return {ssidCookie: cookies.ssid, navigateSuccess, navigateFailure}};
  handles.success = (path) => {
    if (!path && navigateSuccess) navigateWrapper(navigateSuccess)
    else {return navigateWrapper(path)}};
  handles.failure = (path) => {
    dispatch(assignToken(null));
    handles.clearCookie();
    if (!path && navigateFailure) navigateWrapper(navigateFailure, true)
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
      try{
        client.get('/verifyCookie')
        .then(resp => {
          if(resp.data.verified) {
            //console.log('resp.data.verified')
            _setUserState(resp.data.data);
            navigateWrapper(navigateSuccess);
          } else {
            //console.log('resp.data not verified')
            navigateWrapper(navigateFailure, true);
          }
        })
        .catch(err => {
          //console.log('error was caught', err.response.data)
          navigateWrapper(navigateFailure, true);
        })
      } catch(err) {
        console.log('verification error')
      }
    }
  },[])

  
  return handles;

};

export default useAuth;