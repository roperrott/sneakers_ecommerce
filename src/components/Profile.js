import profilePicture from '../images/image-avatar.png';
function Profile(){
    return (<div className='inline-flex items-center'>
            <img src={profilePicture} className="w-[40px] h-[40px]" alt="Profile of the user"/>
        </div>);
}

export default Profile;