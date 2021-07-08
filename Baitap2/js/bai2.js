function tinhTong() {
  var khachHang = document.getElementById("tenKH").value;
  var spanEL = document.createElement("span");
  spanEL.innerHTML =
    "Tiền điện tháng của khách hàng " + khachHang + " : " + tinhToan();
  var ketQua = document.getElementById("thanhTien");
  ketQua.innerHTML = "";
  ketQua.appendChild(spanEL);

  if (khachHang) {
    return khachHang;
  }
  return alert("Tên khách hàng không được để trống"), (ketQua.innerHTML = "");
}

function tinhToan() {
  var soDien = +document.getElementById("soDien").value;
  var tongTien = "";
  if (soDien <= 50) {
    return (tongTien = 500 * soDien);
  }
  if (soDien <= 100) {
    return (tongTien = 50 * 500 + (soDien - 50) * 650);
  }
  if (soDien <= 200) {
    return (tongTien = 50 * (500 + 650) + (soDien - 100) * 850);
  }
  if (soDien <= 350) {
    return (tongTien = 50 * (500 + 650) + 100 * 850 + (soDien - 200) * 1100);
  }
  return (tongTien =
    50 * (500 + 650) + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300);
}
