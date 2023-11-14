import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button as MuiButton } from "@mui/material";
import CentervilleLink from "./centerville-link";
import SellYourHomeContainer from "./sell-your-home-container";
import PropretyCard from "./proprety-card";
import LestTwo from "./lest-two";

const LandingPage = () => {
  return (
    <main className="bg-gray-white w-[1920px] h-[5096px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <header
        className="self-stretch bg-gray-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-large-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border"
        id="header"
      >
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
            <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden md:hidden sm:hidden">
              <div className="relative leading-[22px]">HOME</div>
              <div className="relative leading-[22px]">ABOUT US</div>
              <div className="relative leading-[22px]">OUR AGENTS</div>
              <div className="relative leading-[22px] font-semibold">
                PROPERTIES
              </div>
              <div className="relative leading-[22px]">GALLERY</div>
              <div className="relative leading-[22px]">BLOG</div>
              <div className="relative leading-[22px]">CONTACT US</div>
              <div className="relative leading-[22px]">SEARCH</div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 hidden lg:flex md:flex sm:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      </header>
      <section className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[72px] font-semibold font-inherit">
              Find Your Dream Home
            </h1>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start hover:bg-darkslateblue"
                autoFocus={true}
                disabled={false}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                  Rent
                </div>
              </button>
              <div className="rounded bg-gray-white overflow-hidden flex flex-row items-start justify-start py-3 px-6">
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-primary-400 text-center">
                  Sale
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-center">
                    Locations
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {[{ value: "NewYork" }, { value: "Los Angeies" }].map(
                          (option, index) => (
                            <Menu.Item key={index}>
                              <a onClick={(e) => e.preventDefault()}>
                                {option.value || ""}
                              </a>
                            </Menu.Item>
                          )
                        )}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <Button onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                    Property Type
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-large-400 text-primary-700 text-left flex items-end w-[150px]">
                    Rent Range
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <Button
                  size="middle"
                  shape="default"
                  style={{ width: "102px" }}
                  type="primary"
                >
                  Search
                </Button>
              </nav>
            </div>
          </form>
        </div>
      </section>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%px]">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <CentervilleLink cityName="Centerville" />
              <CentervilleLink
                cityName="Centerville"
                propBackgroundImage="url('/card-2@3x.png')"
                propPadding="unset"
                propBoxSizing="unset"
              />
              <CentervilleLink
                cityName="Centerville"
                propBackgroundImage="url('/card-3@3x.png')"
                propPadding="unset"
                propBoxSizing="unset"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <CentervilleLink
                cityName="Arlington"
                propBackgroundImage="url('/card-4@3x.png')"
                propPadding="10px"
                propBoxSizing="border-box"
              />
              <CentervilleLink
                cityName="Centerville"
                propBackgroundImage="url('/card-5@3x.png')"
                propPadding="10px"
                propBoxSizing="border-box"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0">
        <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
            <SellYourHomeContainer
              imageId="/icon.svg"
              homeActionText="Sell your home"
            />
            <SellYourHomeContainer
              imageId="/icon1.svg"
              homeActionText="Rent your home"
              propWidth="312px"
            />
            <SellYourHomeContainer
              imageId="/icon2.svg"
              homeActionText="Buy a home"
              propWidth="unset"
            />
            <SellYourHomeContainer
              imageId="/icon3.svg"
              homeActionText="Free marketing"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <form className="w-[1920px] flex flex-col items-center justify-start py-[86px] px-0 box-border gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-large-400 text-primary-800 text-center">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-gray-400 text-center">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
            <div className="flex-1 rounded-3xs bg-gray-white box-border h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
              <img
                className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                alt=""
                src="/property-image@2x.png"
              />
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <div className="flex-1 relative text-[14.51px] leading-[20.32px] font-medium font-body-large-400 text-gray-700 text-left">
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start p-2.5">
                <div className="relative text-[13.55px] leading-[18.98px] font-semibold font-body-large-400 text-primary-500 text-left">
                  $ 590,693
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px]">
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.4px] h-[17.4px]"
                    alt=""
                    src="/car.svg"
                  />
                  <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.4px] h-[17.4px]"
                    alt=""
                    src="/bathtub.svg"
                  />
                  <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                    4
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[4.35px]">
                  <img
                    className="relative w-[17.4px] h-[17.4px]"
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className="relative text-[10.84px] leading-[16.27px] font-medium font-body-large-400 text-gray-500 text-left">
                    2,096.00 ft
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-row items-center justify-start gap-[5.81px]">
                  <img
                    className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="relative text-[11.61px] leading-[17.42px] font-medium font-body-large-400 text-gray-700 text-center">
                    Jenny Wilson
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.71px]">
                  <input
                    className="[border:none] bg-primary-50 rounded-[1.45px] flex flex-row items-start justify-start p-[2.902620315551758px]"
                    placeholder="Placeholder"
                    type="text"
                  />
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
                    <img
                      className="relative w-[14.5px] h-[14.5px]"
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
                    <img
                      className="relative w-[14.5px] h-[14.5px]"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <PropretyCard imageDimensions="/property-image1@2x.png" />
            <PropretyCard imageDimensions="/property-image2@2x.png" />
            <PropretyCard imageDimensions="/property-image3@2x.png" />
          </div>
        </div>
        <MuiButton color="primary" size="medium" variant="contained">
          Load more listing
        </MuiButton>
      </form>
      <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px]">
            <LestTwo />
            <LestTwo propBackgroundImage="url('/card-21@3x.png')" />
            <LestTwo propBackgroundImage="url('/card-31@3x.png')" />
            <LestTwo propBackgroundImage="url('/card-41@3x.png')" />
          </div>
        </div>
        <MuiButton color="primary" size="medium" variant="contained">
          Load more listing
        </MuiButton>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-gray-400">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch relative leading-[36px]">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-roboto text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <input
                  className="font-roboto text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch"
                  placeholder="First name"
                  type="text"
                />
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                  <input
                    className="[border:none] font-roboto text-base bg-[transparent] relative tracking-[0.15px] leading-[24px] text-darkgray text-left"
                    placeholder="Last name"
                    type="text"
                  />
                </div>
              </div>
              <input
                className="font-roboto text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1"
                placeholder="Email id"
                type="email"
              />
              <textarea
                className="bg-[transparent] h-[105px] font-roboto text-base self-stretch rounded box-border flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1"
                placeholder="Comments or questions"
                rows={10}
              />
              <MuiButton
                sx={{ width: 222 }}
                color="primary"
                size="medium"
                variant="contained"
              >
                Submit
              </MuiButton>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
        <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
          <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-large-400">
            <div className="flex flex-row items-center justify-center gap-[8px]">
              <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[24px] font-semibold">
                  REIS
                </div>
                <div className="relative text-sm leading-[16px] font-medium">
                  Real State
                </div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
              <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
                Contact Us
              </div>
              <div className="relative leading-[24px]">Call : +123 400 123</div>
              <div className="relative leading-[24px] flex items-end w-[312px]">
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className="relative leading-[24px] text-gray-700">
                Email: example@mail.com
              </div>
            </div>
            <div className="w-[304px] flex flex-row items-center justify-between">
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="relative w-5 h-[21.7px]"
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo1.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo2.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo3.svg"
                />
              </div>
              <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-media-logo4.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Features
            </div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">Home</div>
              <div className="relative leading-[24px]">Become a Host</div>
              <div className="relative leading-[24px]">Pricing</div>
              <div className="relative leading-[24px]">Blog</div>
              <div className="relative leading-[24px]">Contact</div>
            </div>
          </div>
          <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">Company</div>
            <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">About Us</div>
              <div className="relative leading-[24px]">Press</div>
              <div className="relative leading-[24px]">Contact</div>
              <div className="relative leading-[24px]">Careers</div>
              <div className="relative leading-[24px]">Blog</div>
            </div>
          </div>
          <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
            <div className="relative leading-[32px] font-semibold">
              Team and policies
            </div>
            <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
              <div className="relative leading-[24px]">Terms of servies</div>
              <div className="relative leading-[24px]">Privacy Policy</div>
              <div className="relative leading-[24px]">Security</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
