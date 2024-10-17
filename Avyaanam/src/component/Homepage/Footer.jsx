import React from 'react';

const Footer = () => {
  return (
    <footer className="new_footer_area  bg-gray-100">
      <div className="new_footer_top flex relative overflow-x-hidden py-20">
        <div className="container mx-auto">
          <div className="row">
            {/* Get in Touch Section */}
            <div className="col-lg-3 flex col-md-6 mb-20 items-center justify-center ">
              <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                <p>Don't miss any updates of our new templates and extensions!</p>
                <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate>
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail border rounded-md p-2"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two mt-4 px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-transparent hover:text-purple-600 transition duration-200" type="submit">
                    Subscribe
                  </button>
                  <p className="mchimp-errmessage hidden"></p>
                  <p className="mchimp-sucmessage hidden"></p>
                </form>
              </div>
            </div>
            <div className='flex justify-around'>

            {/* Download Section */}
            <div className="col-lg-3 col-md-6 mb-8 ">
              <div className="f_widget about-widget pl-4 wow fadeInLeft" data-wow-delay="0.4s">
                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                <ul className="list-unstyled f_list">
                  {['Company', 'Android App', 'iOS App', 'Desktop', 'Projects', 'My tasks'].map(item => (
                    <li key={item} className="mb-2">
                      <a href="#" className="text-gray-600 hover:text-purple-600">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Help Section */}
            <div className="col-lg-3 col-md-6 mb-8">
              <div className="f_widget about-widget pl-4 wow fadeInLeft" data-wow-delay="0.6s">
                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                <ul className="list-unstyled f_list">
                  {['FAQ', 'Terms & conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map(item => (
                    <li key={item} className="mb-2">
                      <a href="#" className="text-gray-600 hover:text-purple-600">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Team Solutions Section */}
            <div className="col-lg-3 col-md-6 mb-8">
              <div className="f_widget social-widget pl-4 wow fadeInLeft" data-wow-delay="0.8s">
                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                <div className="f_social_icon">
                  {['facebook', 'twitter', 'linkedin', 'pinterest'].map(icon => (
                    <a key={icon} href="#" className={`fab fa-${icon} text-gray-600 hover:text-purple-600 mr-2`}></a>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Footer Background Animation */}
        <div className="footer_bg absolute bottom-0 w-full h-[266px] bg-center bg-no-repeat"
             style={{ backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png')" }}>
          <div className="footer_bg_one bg-center bg-no-repeat"
               style={{ width: "330px", height: "105px", position: "absolute", bottom: 0, left: "30%", animation: "myfirst 22s linear infinite", backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif')" }} 
          ></div> 
          <div className="footer_bg_two bg-center bg-no-repeat"
               style={{ width: "88px", height: "100px", position: "absolute", bottom: 0, left: "38%", animation: "myfirst 30s linear infinite", backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif')" }}
          ></div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer_bottom py-5">
        <div className="container mx-auto">
          <div className="row items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 text-gray-600">© cakecounter Inc. 2019 All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p className="text-gray-600">
                Made with <i className="icon_heart"></i> in <a href="http://cakecounter.com" target="_blank" rel="noopener noreferrer" className="text-purple-600">CakeCounter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
