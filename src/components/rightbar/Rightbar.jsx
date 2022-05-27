import "./Rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";
//
export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return (
      <>
        <div className="birthdayContainer">
            <img src="/assets/gift.png" alt="" className="birthdayImg"/>
            <span className="birthdayText"><b>Mennad Dmn</b> and <b>3 other friends</b> have a birthday today</span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
          {Users.map((user)=>{return <Online key={user.id} user={user}/>})}
          </ul>
        </>
    )
  }
  //
  const ProfileRightbar = ()=>{
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Paris</span>
        </div>
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Algeria</span>
        </div>
        <div className="rightbarInfoItem"></div>
            <span className="rightbarInfoKey">Realtionship:</span>
            <span className="rightbarInfoValue">Single</span>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {Users.map((user)=>{
          return (
            <div className="rightbarFollowing" key={user.id}>
              <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{user.username}</span>
            </div>
          )
        })}
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
