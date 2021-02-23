import jsPDF from "jspdf";
import "jspdf-autotable";
import { formatDateISO } from "../../../../components/notification/function";
// Date Fns is used to format the dates we receive

// define a generatePDF function that accepts a tickets argument
const CetakPenjualanSales = (
  row1isi = "",
  row2isi = "",
  row3isi = "",
  data
) => {
  // initialize jsPDF
  const doc = new jsPDF("landscape");
  //   let data = JSON.parse(localStorage.getItem("tt_pengeluaran_barang")) || [];
  let tableRows = [];
  let footRows = [];
  let finalY = 40;
  let total = 0;
  doc.setFontSize(15);
  doc.text("LAPORAN PENJUALAN SALES", 14, 15);
  doc.setFontSize(10);
  //row 1
  doc.text(`TANGGAL : ${row1isi} s/d ${row2isi}`, 14, 25);
  doc.text(`NAMA SALES : ${row3isi}`, 14, 30);
  //   row 2
  //   doc.text(`Tanggal	: ${row2isi}`, 120, 25);
  data.forEach((item, index) => {
    let tableColumn = [
      [
        {
          content: `Nama Sales\t: ${item.sales}`,
          colSpan: 8,
        },
      ],
      [
        {
          content: `TANGGAL`,
        },
        {
          content: `NO FAKTUR`,
        },
        {
          content: `BARCODE`,
        },
        {
          content: `NAMA`,
        },
        {
          content: `MERK`,
        },
        {
          content: `QTY`,
        },
        {
          content: `SATUAN`,
        },
        {
          content: `TOTAL`,
        },
      ],
    ];
    item.detail.forEach((list) => {
      let rows = [
        formatDateISO(list.tanggal),
        list.no_faktur_jual,
        list.kode_barcode,
        list.nama_barang,
        list.merk_barang,
        list.qty,
        parseFloat(list.harga_satuan).toLocaleString("id-ID"),
        parseFloat(list.harga_total).toLocaleString("id-ID"),
      ];
      total = total + parseFloat(list.harga_total);
      tableRows.push(rows);
    });
    let foot = [
      "",
      "",
      "",
      "",
      "",
      "",
      "Total",
      parseFloat(total).toLocaleString("id-ID"),
    ];
    footRows.push(foot);
    finalY = doc.lastAutoTable.finalY + 10;
    doc.autoTable({
      head: tableColumn,
      body: tableRows,
      foot: footRows,
      startY: index === 0 ? 35 : finalY + 5,
      theme: "plain",
      rowPageBreak: "avoid",
      // pageBreak: "avoid",
      margin: { top: 20 },
      bodyStyles: { lineWidth: 0.02, lineColor: "#000" },
      headStyles: {
        lineWidth: 0.02,
        lineColor: "#000",
        fillColor: [187, 187, 187],
      },
    });
    tableRows = [];
  });

  // doc.autoPrint();
  // doc.save(`${title}_${dateStr}.pdf`);
  var string = doc.output("datauristring");
  var embed = "<embed width='100%' height='100%' src='" + string + "'/>";
  var x = window.open();
  x.document.open();
  x.document.write(embed);
  // x.document.close();
  // setInterval(() => {
  //   x.close();
  // }, 1000);
};

export default CetakPenjualanSales;
