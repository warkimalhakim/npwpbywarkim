/*!
 * NPWPbyWarkim v.1 (https://npwp.warkim.com)
 * Author: Warkim (Warkim Rapii)
 * Website: www.warkim.com
 * Contact: me@warkim.com
 * Facebook: warkim.rapii
 * Instagram: warkimwarkim
 *
 * Copyright 2020 npwpbywarkim
 * Shareware license
 * Do not modification, remove any attributes in sources or in this program.
 */
$(document).ready(function () {

    var link_download   = 'https://s.id/download_npwpbywarkim'; // url download app
    var img_qrcode_ovo   = 'assets/img/ovo.jpg'; // path gambar qr/qris code donasi ovo
    var img_qrcode_dana   = 'assets/img/dana.jpg'; // path gambar qr/qris code donasi dana


	$("#download").click(function () {
		$.confirm({
			icon: "fa fa-exclamation",
			title: "Halo Gaes",
			type: "green",
			columnClass: "medium",
			content: "Download gratis untuk digunakan secara offline di komputer Anda. Silahkan download dan dukung kami dengan donasi.",
			buttons: {
				Download: {
					text: '<i class="fa fa-download"></i> Download',
					btnClass: "btn-light",
					closeAnimation: "rotate",
					action: function () {
						$.alert({
							icon: "fa fa-download",
							title: "Download",
							type: "green",
							columnClass: "medium",
                            // content: '<p class="h3 text-danger">Maaf Download Belum Tersedia!</p><br>Maaf Gaes, tool ini baru saja di rilis, tunggu beberapa waktu kedepan ya dan selamat menikmati versi online.',
                            content: 'Silahkan download gratis klik <a href="'+link_download+'" target="_blank" class="text-success">disini</a> atau melalui Url <a href="'+link_download+'" target="_blank" class="text-success">'+link_download+'</a><br><br><strong>Cara penggunaan?</strong> Silahkan baca di <a href="https://warkim.com" target="_blank" title="Website resmi Warkim">Warkim.com</a>',
							buttons: {
								tutup: {}
							}
						})
					}
				},
				Donasi: {
					text: '<i class="fa fa-heart"></i> Donasi',
					btnClass: "btn-green",
					action: function () {
						$.alert({
							icon: "fa fa-heart",
							title: "Donasi",
							type: "purple",
							columnClass: "medium",
							closeAnimation: "right",
                            // content: '<p class="h3 text-danger">Wadaw!</p><br>Terima kasih atas antusiasme Anda, tapi kami belum bisa menampilkan Payment Gatheway untuk donasinya, agar Aman dan Terkonfirmasi. Santai <i class="fas fa-coffee"></i> dan tetap <i class="fas fa-heart text-danger"></i> Kami.',
                            content: 'Donasi dengan Scan QRCode / QRISCode sebagai gerbang pembayaran donasi yang aman dan standar. Scan Donasi dengan <a href="#ovo">OVO</a> atau <a href="#dana">DANA</a>.<br><a name="ovo"></a><a href="'+img_qrcode_ovo+'"><img src="'+ img_qrcode_ovo +'" class="img-fluid rounded mx-auto d-block" width="80%" alt="Donasi dengan OVO a/n: Warkim" /></a><br><p style="text-align:center;">SCAN Dengan Aplikasi OVO</p><br><a name="dana"></a><a href="'+img_qrcode_ovo+'"><img src="'+ img_qrcode_dana +'" class="img-fluid rounded mx-auto d-block" width="80%" alt="Donasi dengan Dana a/n: Warkim" /></a><br><p style="text-align:center;">SCAN Dengan Aplikasi DANA</p>',
							buttons: {
								tutup: {
									text: "Terima kasih",
									btnClass: "btn-purple"
								}
							}
						})
					}
				}
			}
		})
	}), $("#info").click(function () {
		$.confirm({
			theme: "supervan",
			title: '<img src="assets/img/warkim_thumb.png">',
			content: '<h2>Warkim <span class="font-weight-light">Rapii</span></h2><p><strong>NPWPbyWarkim</strong> dibuat untuk Anda sekalian yang mempunyai keterkaitan dalam pajak. Rekomendasi bagi Anda peserta kursus/pelatihan, dosen, guru atau trainer, pekerja dan konsultan pajak.</p><p>Tool ini bisa Anda manfaatkan untuk generate (pembuatan secara acak) NPWP dan Validasi NPWP. Tool ini mengusung NPWP standar dan accepted, kemudahan (user friendly), interaktif (interactive), ringan (lightweight) dan tentunya menggunakan library yang modern.<br><p><br><a href="'+link_download+'" target="_blank"><p class="h4">Download Gratis</p></a>',
			closeIcon: !0,
			columnClass: "medium",
			buttons: {
				Tutup: {
					text: "Tutup",
					keys: ["x", "esc"]
				},
				Bugs: {
					text: "Laporkan Bugs",
					key: "y",
					action: function () {
						window.open("https://m.me/warkim.rapii", "_blank")
					}
				}
			}
		})
	})
});