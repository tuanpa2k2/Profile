// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { GiFlyingTarget } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaBirthdayCake, FaLocationArrow, FaPhone } from "react-icons/fa";
import TitleComp from "../../Component/Title/TitleComp";

import image_person from "../../assets/person.png";
import image_sweak from "../../assets/sweak.png";
import image_strong from "../../assets/strong.png";
import image_personality from "../../assets/personality.png";
import image_passion from "../../assets/passion.png";

import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <div className="profiles">
      <div className="pro__title">
        <TitleComp title="Thông tin cá nhân" />
      </div>
      <div className="pro__name">
        <div className="desscription">
          <div className="dess__mota">
            <span>
              <IoMdPerson /> Tên đầy đủ
            </span>
            <p>Phí Anh Tuấn</p>
          </div>
          <div className="dess__mota">
            <span>
              <FaBirthdayCake /> Ngày sinh
            </span>
            <p>03 - 01 - 2002</p>
          </div>
          <div className="dess__mota">
            <span>
              <FaLocationArrow /> Quê quán
            </span>
            <p>Thanh Xuân, xã Thuần Thành, huyện Thái Thụy - Thái Bình</p>
          </div>
          <div className="dess__mota">
            <span>
              <FaPhone /> Số điện thoại
            </span>
            <p>036 526 9311</p>
          </div>
          <div className="dess__mota">
            <span>
              <MdMarkEmailRead /> Email
            </span>
            <p>tuanpa2k2@gmail.com</p>
          </div>
        </div>
        <div className="avatar">
          <img src={image_person} alt="imggg" />
        </div>
      </div>
      <div className="pro__person">
        <div className="target">
          <div className="iconn">
            <GiFlyingTarget />
          </div>
          <div className="textt">
            <h2>Mục tiêu nghề nghiệp</h2>
            <div className="text__des">
              <p>- Tìm kiếm một công việc ổn định đúng với đam mê và định hướng lâu dài.</p>
              <p>- Ham học hỏi, luôn cầu tiến trong công việc.</p>
              <p>- Rèn luyện, cập nhập thêm kĩ năng lập trình (full-stack).</p>
            </div>
          </div>
          <div className="iconn">
            <GiFlyingTarget />
          </div>
        </div>
        <div className="pro__person__des">
          <div className="tinhcach">
            <div className="contentt">
              <h2>* Tính cách</h2>
              <p>- Thật thà, hòa đồng, luôn trung thực và trách nhiệm với công việc.</p>
              <p>- Lối sống lành mạnh, ngăn lắp</p>
              <p>- ...</p>
            </div>
            <div className="iconn">
              <img src={image_personality} alt="" />
            </div>
          </div>
          <div className="diemmanh">
            <div className="contentt">
              <h2>* Điểm mạnh</h2>
              <p>- Sức khỏe tốt, chịu khó, nhiệt tình - năng động.</p>
              <p>- Có tính trách nhiệm, có sự tập chung khi làm việc.</p>
              <p>- Quan sát, sáng tạo với những thứ đam mê</p>
              <p>- Có tính thẩm mỹ, yêu cái đẹp</p>
              <p>- ...</p>
            </div>
            <div className="iconn">
              <img src={image_strong} alt="" />
            </div>
          </div>
          <div className="diemyeu">
            <div className="contentt">
              <h2>* Điểm yếu</h2>
              <p>- Tự ti, sống nội tâm nhiều hơn - hướng nội parttime</p>
              <p>- Không dám làm, hay suy nghĩ về kết quả xấu</p>
              <p>- ...</p>
            </div>
            <div className="iconn">
              <img src={image_sweak} alt="" />
            </div>
          </div>
          <div className="sothich">
            <div className="contentt">
              <h2>* Sở thích & Đam mê</h2>
              <p>- Thích nấu ăn, sáng tạo </p>
              <p>- Thích những thứ có nhiều chi tiết, bắt mắt.</p>
              <p>- Thích đi du lịch, khám phá những điều độc lạ.</p>
              <p>- Đam mê cái đẹp (moto, diều sáo, thể hình, ...)</p>
              <p>- ...</p>
            </div>
            <div className="iconn">
              <img src={image_passion} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
