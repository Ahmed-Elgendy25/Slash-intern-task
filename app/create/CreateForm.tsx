'use client';

import { createClient } from '@/utils/supabase/client';
import { useReducer } from 'react';
import { Riple } from 'react-loading-indicators';

// Initial state for the form
type initialStateTyped = {
  title: string;
  body: string;
  cover: File | null;
  imageDetails: File | null;
  urlCover: string;
  urlImageDetails: string;
  loading: boolean;
  success: boolean;
  error: string;
};

const initialState: initialStateTyped = {
  title: '',
  body: '',
  error: '',
  cover: null,
  imageDetails: null,
  urlCover: '',

  urlImageDetails: '',
  success: false,
  loading: false,
};

// Reducer function to handle state updates
function formReducer(
  state: initialStateTyped,
  action: { type: string; payload: any }
): initialStateTyped {
  switch (action.type) {
    case 'SET_TITLE':
      return { ...state, title: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    case 'SET_COVER':
      return { ...state, cover: action.payload };
    case 'SET_IMAGEDETAILS':
      return { ...state, imageDetails: action.payload };
    case 'SET_URLCOVER':
      return { ...state, urlCover: action.payload };
    case 'SET_URLIMAGEDETAILS':
      return { ...state, urlImageDetails: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload };
    default:
      return state;
  }
}

function CreateForm() {
  const [
    {
      body,
      cover,
      imageDetails,
      title,
      urlCover,
      urlImageDetails,
      loading,
      error,
      success,
    },
    dispatch,
  ] = useReducer(formReducer, initialState);

  const submitForm = async (
    body: string,

    title: string,
    url_cover: string,
    url_image: string
  ) => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      let res = await fetch(`http://localhost:3000/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body, title, url_cover, url_image }),
      });

      let json = await res.json();

      if (json.error) {
        console.log(json.error.message);
        dispatch({ type: 'SET_ERROR', payload: json.error.message });
      } else if (json.data) {
        console.log(json.data);
        dispatch({ type: 'SET_SUCCESS', payload: true });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      dispatch({ type: 'SET_ERROR', payload: String(error) });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  {
    // console.log(imageDetails);
    // console.log(cover);
    // console.log(urlCover);
    // console.log(urlImageDetails);
  }

  if (urlCover && urlImageDetails) {
    submitForm(body, title, urlCover, urlImageDetails);

    dispatch({ type: 'SET_URLCOVER', payload: '' });
    dispatch({ type: 'SET_URLIMAGEDETAILS', payload: '' });
  }

  async function handleFilePostRequest(
    cover: File | null,
    imageDetails: File | null
  ) {
    dispatch({ type: 'SET_ERROR', payload: '' });

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_SUCCESS', payload: false });

    const supabase = createClient();
    try {
      if (cover) {
        const { data, error } = await supabase.storage
          .from('images')
          .upload('public' + cover?.name, cover as File);

        const path = data?.path;
        // console.log(path);
        if (data) {
          const { data } = await supabase.storage
            .from('images')
            .getPublicUrl(String(path));

          if (data.publicUrl) {
            dispatch({ type: 'SET_URLCOVER', payload: data.publicUrl });
          }
        } else if (error) {
          console.log(error);
          dispatch({ type: 'SET_LOADING', payload: false });

          dispatch({ type: 'SET_ERROR', payload: String(error.message) });
        }
      }

      if (imageDetails) {
        const { data, error } = await supabase.storage
          .from('images')
          .upload('public' + imageDetails?.name, imageDetails as File);
        const path = data?.path;
        console.log(path);

        if (data) {
          const { data } = await supabase.storage
            .from('images')
            .getPublicUrl(String(path));
          // console.log(data.publicUrl);
          if (data.publicUrl) {
            dispatch({ type: 'SET_URLIMAGEDETAILS', payload: data.publicUrl });
          }
        } else if (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  }

  const handleChange = (e: any) => {
    const { name, type, value, files } = e.target;
    if (type === 'file') {
      dispatch({
        type: `SET_${name.toUpperCase()}`,
        payload: files[0],
      });
    } else {
      dispatch({
        type: `SET_${name.toUpperCase()}`,
        payload: value,
      });
    }
  };

  return (
    <form
      className="bg-black h-screen text-primary"
      method="POST"
      encType="multipart/form-data"
      onSubmit={(e) => {
        e.preventDefault();
        handleFilePostRequest(cover, imageDetails);
      }}
    >
      <div className="flex flex-col items-center h-full">
        <h1 className="text-6xl font-semibold tracking-widest mt-48">
          Create your post
        </h1>
        <div className="my-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6"
          >
            Title
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              required
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="body" className="block text-sm font-medium leading-6">
            Body
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <textarea
              required
              name="body"
              id="body"
              value={body}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="cover"
            className="block text-sm font-medium leading-6"
          >
            Blog cover
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="file"
              name="cover"
              accept="image/*"
              id="cover"
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="my-4">
          <label
            htmlFor="imageDetails"
            className="block text-sm font-medium leading-6"
          >
            Image Details
          </label>
          <div className="mt-2 rounded-md shadow-sm">
            <input
              type="file"
              accept="image/*"
              name="imageDetails"
              id="imageDetails"
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-primary ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {loading && (
          <Riple
            color="#FFFECD"
            speedPlus={1}
            size="medium"
            text=""
            textColor=""
          />
        )}

        {error && (
          <span>
            <p className="text-red-500">{error}</p>
          </span>
        )}

        {success && (
          <span>
            <p className="text-green-500">
              Your Post has been posted Successfully! 😉
            </p>
          </span>
        )}
        <button
          type="submit"
          className="bg-primary rounded-full  w-28 mt-3 text-black font-medium "
          disabled={loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateForm;
