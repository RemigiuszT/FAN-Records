import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import avatar from "../img/avatar.jpg";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <img src={avatar} alt="Avatar" width="500px" height="500px"></img>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
