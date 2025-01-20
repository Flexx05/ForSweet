import { useEffect, useRef, useState } from "react";

function DateList() {
  const [isSubmenuVisible, setSubmenuVisible] = useState(false);
  const menuRef = useRef(null);

  // Toggle hiển thị submenu
  const handleToggle = () => {
    setSubmenuVisible((prev) => !prev);
  };

  // Đóng submenu khi nhấn ra ngoài
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setSubmenuVisible(false);
    }
  };

  // Gắn sự kiện click vào document
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="container pt-[50px]" ref={menuRef}>
        <div
          onClick={handleToggle}
          className="bg-gradient-to-t from-[#FFA1C8] to-[#FF006A] w-[550px] h-[60px] flex justify-center items-center rounded-full cursor-pointer"
        >
          <p className="text-white text-[30px]">
            Những chiếc kèo với người yêu
          </p>
        </div>
        {isSubmenuVisible && (
          <div className="bg-white w-[500px] h-[55px] flex justify-center items-center rounded-full">
            <a href="/" className="text-[#FF006A] text-[25px]">
              Những món quà dành tặng người yêu
            </a>
          </div>
        )}
      </div>
      <div className="container pt-[20px] flex gap-[50px]">
        <a
          href="#"
          className="text-[25px] text-[#FF006A] fw-semibold hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          Danh mục 1
        </a>
        <a
          href="#"
          className="text-[25px] text-[#FF006A] fw-semibold hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          Danh mục 2
        </a>
        <a
          href="#"
          className="text-[25px] text-[#FF006A] fw-semibold hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          Danh mục 3
        </a>
        <a
          href="#"
          className="text-[25px] text-[#FF006A] fw-semibold hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          Danh mục 4
        </a>
      </div>
    </div>
  );
}

export default DateList;
