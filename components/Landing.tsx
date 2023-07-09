import { signIn } from 'next-auth/react';
import React, { useState ,useEffect} from 'react'
import { InfinitySpin } from 'react-loader-spinner';

export default function Landing() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Display loader while isLoading is true
        <div className="flex min-h-screen min-w-screen justify-center items-center bg-[#FFD7A1] ">
                  <div className="w-fit">
                      <InfinitySpin 
                              width='200'
                          color="#E87A76"
                          
                            />
                  </div></div>
      ) : (
        // Display the content after 1 second
                  <div className='flex min-h-screen min-w-screen justify-center items-center bg-[#FFD7A1] '>
                      <button className='btn btn-error' onClick={() => signIn()}>Sign In</button>
                  </div>
      )}
    </div>
  );
}
