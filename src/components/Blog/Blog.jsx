import PropTypes from 'prop-types';
import {FaBookmark } from 'react-icons/fa';
const Blog = ({blog ,handleAddToBookmark}) => {
   const {Title,Cover,Author,Author_img,Posted_date,Reading_time,
    Hashtag} = blog;
    return (
        <div className='mb-20'>
            <img className='mb-8' src={Cover} alt={`cover picture of the title ${Title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14 rounded-xl' src={Author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{Author}</h3>
                        <p>{Posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{Reading_time}</span>
                    <button
                    onClick={() => handleAddToBookmark(blog)}
                     className='text-2xl ml-2'>
                        <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl'> {Title} </h1>
            <p className='mb-4'>{Hashtag}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}


export default Blog; 