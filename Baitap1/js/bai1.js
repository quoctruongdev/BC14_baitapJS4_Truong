function hienThi() {
  var tongKet = document.createElement("P");

  tongKet.innerHTML = tinhToan();
  var ketQuaEL = document.getElementById("ketQua");
  ketQuaEL.innerHTML = "";
  ketQuaEL.appendChild(tongKet);
}

function tinhToan() {
  var diemM1 = +document.getElementById("diemMot").value;
  var diemM2 = +document.getElementById("diemHai").value;
  var diemM3 = +document.getElementById("diemBa").value;
  var diemChuan = +document.getElementById("diemChuan").value;
  var tongDiem = diemM1 + diemM2 + diemM3 + diemKV() + diemDT();

  if (
    tongDiem >= diemChuan &&
    diemM1 != 0 &&
    diemM2 != 0 &&
    diemM3 != 0 &&
    diemChuan != 0
  ) {
    return "Xin chúc mừng bạn đã ĐỖ; " + " Tổng điểm của bạn: " + tongDiem;
  }
  if (diemChuan == 0) {
    return "Điểm chuẩn bằng 0 hoặc đang để trống";
  }
  if (
    (tongDiem >= diemChuan && diemM1 == 0) ||
    diemM2 == 0 ||
    (diemM3 == 0 && diemChuan != 0)
  ) {
    return (
      "Xin chia buồn bạn đã Trượt vì bạn có môn học bị điểm liệt; " +
      " Tổng điểm của bạn: " +
      tongDiem
    );
  }
  return "Xin chia buồn bạn đã Trượt;" + " Tổng điểm của bạn: " + tongDiem;
}

function diemKV() {
  var khuVuc = document.getElementById("khuVuc").value;
  var diemKhuVuc = "";
  switch (khuVuc) {
    case "A":
    case "a":
      return (diemKhuVuc = 2);
    case "B":
    case "b":
      return (diemKhuVuc = 1);
    case "C":
    case "c":
      return (diemKhuVuc = 0.5);
    case "X":
    case "x":
      return (diemKhuVuc = 0);
    default:
      alert("Khu vực không hợp lệ hoặc bỏ trống");
  }
}

function diemDT() {
  var doiTuong = document.getElementById("doiTuong").value;
  var diemDoiTuong = "";
  switch (doiTuong) {
    case "1":
      return (diemDoiTuong = 2.5);
    case "2":
      return (diemDoiTuong = 1.5);
    case "3":
      return (diemDoiTuong = 1);
    case "0":
      return (diemDoiTuong = 0);
    default:
      alert("Đối tượng không hợp lệ hoặc bỏ trống");
  }
}
