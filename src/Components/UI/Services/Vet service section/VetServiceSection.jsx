import React from 'react';
import video_bg from "../../../../images_new/services-video.jpg"

const VetServicesSection = () => {
  return (
    <section class="gap services">
    <div class="container">
        <div class="row">
            
            <div class="col-lg-12">
                <div class="video position-relative">
                        <a data-fancybox="" href="https://www.youtube.com/watch?v=xKxrkht7CpY">
                            <i>
                              <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 8.49951L0.5 0.27227L0.5 16.7268L11 8.49951Z" fill="#000"></path>
                              </svg>
                            </i>
                        </a>
                        <figure>
                            <img src={video_bg} alt="img"/>
                        </figure>
                    </div>
            </div>
            
        </div>
    </div>
</section>
  );
};

export default VetServicesSection;
