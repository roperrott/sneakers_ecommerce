import profilePicture from '../assets/image-avatar.png';

const Profile = () =>{
    return (
    <div className='inline-flex items-center'>
        <img src={profilePicture} className="xs:w-[45px] w-[30px] xs:h-[45px] h-[30px]" alt="Profile of the user"/>
    </div>
    );
}

export default Profile;