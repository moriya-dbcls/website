"use strict";var script=document.createElement("script"),script_sticky=document.createElement("script"),link_favicon=document.createElement("link"),tags={public_relations:"広報",services:"サービス",events:"イベント",registration:"募集",other:"その他"};script.setAttribute("src","https://code.jquery.com/jquery-3.2.1.min.js"),script_sticky.setAttribute("src","/script/stickyfill.min.js"),link_favicon.setAttribute("rel","icon"),link_favicon.setAttribute("type","image/png"),link_favicon.setAttribute("href","/img/favicon.png"),document.head.appendChild(script),document.head.appendChild(script_sticky),document.head.appendChild(link_favicon);var initialize={index:function e(){function a(){var e=$(".main-image__contents DIV.active");0==e.length&&(e=$(".main-image__contents DIV:last"));var a=e.next().length?e.next():$(".main-image__contents DIV:first");e.addClass("last-active"),a.css({opacity:0}).addClass("active").animate({opacity:1},1e3,function(){e.removeClass("active last-active")})}$(".news__individual-wrapper").css("display","block");var t=window.location,i=t.href.split("/"),s=i.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"index.html"===s&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),setInterval(function(){a()},5e3)},news:function e(){var a="";a=document.referrer,a=a.match(".+/(.+?)([?#;].*)?$")[1],"events.html"===a||"events-en.html"===a?(setTimeout(function(){$(".tag-event").trigger("click")},0),setTimeout(function(){$(".news__individual-wrapper").css("display","block")},500)):$(".news__individual-wrapper").css("display","block");var t=window.location,i=t.href.split("/"),s=i.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"news.html"===s&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$(".post__individual").each(function(){var e=$(this).attr("class");e=e.match(/\[\"(.+?)\"\]/g),e=e[0].match(/\"(.+?)\"/g),e=e.join(" "),e=e.replace(/"/g,""),$(this).addClass(e)})},post:function e(){var a=window.location,t=a.href.split("/"),i=t.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),marked($(".markdown-body").html()),t.indexOf("ja")>=0&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$(document).ready(function(){$("a[href^='http']:not([href*='"+location.hostname+"'])").attr("target","_blank")})},about:function e(){$(".lazy-mail").each(function(){var e=this;setTimeout(function(){var a=jQuery(e),t=a.data("address").split("_at_").join("@").split("_dot_").join(".");a.attr("href","mailto:"+t).text(t)},1e3)})},history:function e(){var a=$(".table-history").height();$(".history__vertival-line").css("height",a),$(".history__vertival-dotted").css("top",a+12)},funding:function e(){},faq:function e(){},policy:function e(){},logotype:function e(){},research:function e(){},publications:function e(){},references:function e(){$.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/1JGvXRqvu5A5IhaYfz40yTblNP7bZZL6GaPGaZl7knHM/values/references?key=AIzaSyCKBRLAEd_o7WAeBN5m0NZZ1Eusco7VtHw",dataType:"json",async:!0,success:function e(a){function t(){"en"===document.documentElement.lang?($(".main__content-title").text("Papers Citing our services"),$(".publications__wrapper").append(o)):"ja"===document.documentElement.lang&&($(".main__content-title").text("引用文献一覧"),$(".publications__wrapper").append(o))}function i(e){location.hash=e;var a=e.replace("%20"," ");$(".main__content-title").text(a),$(".publications__wrapper").empty();var t=[];t=c[a],t=t.filter(function(e){return"Original"!==e[1]});for(var i="",s=0;s<t.length;s++)i+='<div class="publications__column__wrapper"><h4 class="publications__column__title">'+t[s][4]+'</h4><p class="publications__column__pubmed"><span class="publications__column__title-small">Pubmed: </span><a href="https://www.ncbi.nlm.nih.gov/pubmed/?term='+t[s][2]+'">https://www.ncbi.nlm.nih.gov/pubmed/?term='+t[s][2]+'</a></p><p class="publications__column__DOI"><span class="publications__column__title-small">DOI: </span><a href="'+t[s][3]+'">'+t[s][3]+'</a></p><div class="publications__column__wrapper-small"><i class="fa fa-user" aria-hidden="true"></i><p>'+t[s][5]+'</p><i class="fa fa-clock-o" aria-hidden="true"></i><p>'+t[s][7]+'</p><i class="fa fa-book" aria-hidden="true"></i><p>'+t[s][6]+'</p><i class="fa fa-quote-right" aria-hidden="true"></i><p>'+t[s][1]+"</p></div></div>";$(".publications__wrapper").append(i)}for(var s=a.values,n=[],l=0;l<s.length;l++)n.push(s[l][0]);n=_.rest(n,2),n=_.uniq(n);for(var c={},l=0;l<n.length;l++){var r=n[l];c[r]=s.filter(function(e){return e[0]===r})}var o="",p=Object.keys(c);for(o+='<table class="papers_citing_table"><tbody>',l=0;l<p.length;l++){var v=c[p[l]];v=v.filter(function(e){return"Original"!==e[1]});var u=v.length;o+='<tr><td><div class="filName" data-category="'+p[l]+'">'+p[l]+'</div></td><td><p class="quote_num">'+u+"</p></td></tr>"}if(o+="</tbody></table>",t(),$(document).on("click",".filName",function(){p=$(this).html(),i(p)}),$(document).on("click",".quote_num",function(){var e=$(this).parent().prev().find("div");p=e.html(),i(p)}),window.addEventListener("hashchange",function(){if(""===location.hash)$(".publications__wrapper").empty(),t();else{i(location.hash.slice(1))}},!1),""===location.hash);else{i(location.hash.slice(1))}}})},services:function e(){function a(){$.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo",dataType:"json",async:!0,success:function e(a){function t(e,a){var t=0;if("category"===e)for(var i=0;i<n.length;i++)n[1][i]===a&&(t=i);else if("other"===e)for(var i=0;i<n.length;i++)n[0][i]===a&&(t=i);return t}function i(e){var a=[];return"Y"===l[e][m]&&a.push("omics"),"Y"===l[e][d]&&a.push("text-mining"),"Y"===l[e][_]&&a.push("contents"),"Y"===l[e][h]&&a.push("semantic"),"Y"===l[e][f]&&a.push("biologist"),"Y"===l[e][g]&&a.push("application"),"Y"===l[e][b]&&a.push("data-scientist"),"Y"===l[e][w]&&a.push("provider"),a}function s(e){function a(){return $.ajax({type:"GET",url:"./services/"+e+".md"})}location.hash=e;var t="",i="";a().done(function(e){i=marked(e),$(".service__wrapper").empty();var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html(i))}).fail(function(e){$(".service__wrapper").empty();var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html("<p>データを取得できませんでした</p>"))})}for(var n=a.values,l=n.filter(function(e){return"Y"===e[0]}),c="",r=t("other","サービス名称"),o=t("other","コアサービス名"),p=t("other","explanation_ja"),v=t("other","explanation_en"),u=t("other","URL"),m=t("category","Omics tools/データ解析ツール"),d=t("category","Text mining/文献知識抽出"),_=t("category","Contents/コンテンツ"),h=t("category","Semantic web/セマンティックウェブ"),f=t("category","Database user/データベース利用者"),g=t("category","Database application developer/アプリケーション開発者"),b=t("category","Data scientist/大規模データ解析者"),w=t("category","Data provider/データ所有者"),y=t("other","画像"),k={omics:{ja:"データ解析ツール",en:"Omics tools"},contents:{ja:"コンテンツ",en:"contents"},"text-mining":{ja:"文献知識抽出",en:"Text mining"},semantic:{ja:"セマンティックウェブ",en:"Semantic web"},biologist:{ja:"データベース利用者",en:"Database user"},application:{ja:"アプリケーション開発者",en:"Database application developer"},"data-scientist":{ja:"大規模データ解析者",en:"Data scientist"},provider:{ja:" データ所有者",en:"Data provider"}},j=window.location,x=j.href.split("/"),E=x.pop(),z=0;z<l.length;z++){var C=function e(a,t){var i="";if("ja"===t)for(var s=0;s<a.length;s++){var n=a[s];i+='<div class="service_category tag_element '+a[s]+'">'+k[n].ja+"</div>"}else if("en"===t)for(var s=0;s<a.length;s++){var n=a[s];i+='<div class="service_category tag_element '+a[s]+'">'+k[n].en+"</div>"}return i},A=i(z),T=A.join(" ");"services.html"===E?c+='<article class="article__section contener-type-box mix '+T+'"><div id="repos_name'+z+'" class="repos_name"><p class="name name_ja">'+l[z][r]+'</p><div class="keyword">'+l[z][p]+"</div>"+C(A,"ja")+'<div class="btn-box"><a class="page_btn more_btn">詳細</a><a href="'+l[z][u]+'" class="page_btn access_btn" target="_blank">アクセス</a></div></div><div id="repos_image0" class="repos_image"><img src="./img/service_assets/'+l[z][y]+'" alt="'+l[z][r]+'" class="object-fit-img img_services"></div>':"services-en.html"===E&&(c+='<article class="article__section contener-type-box mix '+T+'"><div id="repos_name'+z+'" class="repos_name"><p class="name name_en">'+l[z][r]+'</p><div class="keyword">'+l[z][v]+"</div>"+C(A,"en")+'<div class="btn-box"><a class="page_btn more_btn">more</a><a href="'+l[z][u]+'" class="page_btn access_btn" target="_blank">Access</a></div></div><div id="repos_image0" class="repos_image"><img src="./img/service_assets/'+l[z][y]+'" alt="'+l[z][r]+'" class="object-fit-img img_services"></div>'),c+="</article>"}$("#service_list").append(c);var D=document.querySelector(".service__wrapper"),O=mixitup(D,{multifilter:{enable:!0},debug:{enable:!0}});$(document).on("click",".more_btn",function(){$("html,body").scrollTop(0);var e=$(this).parent().siblings(".name").html(),a=$(this).parent().siblings(".name").attr("class");a.match(/name_ja/)?e+="_ja":a.match(/name_en/)&&(e+="_en"),e=e.replace(/ /g,"_"),s(e)})}})}function t(e){location.hash=e;var a="",t=[];$.ajax({type:"get",url:"https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo",dataType:"json"}).done(function(a){function t(e){for(var a=0,t=0;t<n.length;t++)n[0][t]===e&&(a=t);return a}function i(e){for(var a="",t=[],i=0;i<l.length;i++){var s=l[i][c],n=l[i][r];e=e.replace(/_/g," "),s===e&&(a=l[i][r])}for(var i=0;i<l.length;i++){var s=l[i][c];l[i][r]===a&&t.push(l[i][c])}return t}function s(e){$.ajax({type:"get",url:"./services/"+e+".md"}).done(function(e){var a="";a=marked(e);var t=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html(a))}).fail(function(e){var a=$(".service__wrapper").append($("<div/>").attr({class:"markdown-body"}).html("<p>データを取得できませんでした</p>"))})}var n=a.values,l=n.filter(function(e){return"Y"===e[0]}),c=t("サービス名称"),r=t("コアサービス名"),o=e.replace("_ja","");o=o.replace("_en","");var p=i(o),v=[];p.forEach(function(a){a=a.replace(/ /g,"_"),a=a.replace(/\//g,"_"),"_ja"===e.slice(-3)?a+="_ja":"_en"===e.slice(-3)&&(a+="_en"),v.push(a)}),$(".service__wrapper").empty(),v.map(function(e){s(e)})})}var i="",s;if(""===location.hash);else{$(".facet_section").css("display","none");t(location.hash.slice(1))}a(),window.addEventListener("hashchange",function(){if(""===location.hash){$(".facet_section").toggleClass("off"),$(".service__wrapper").empty();var e=document.querySelector(".service__wrapper");mixitup(e,{multifilter:{enable:!0},debug:{enable:!0}}).destroy(),a()}else{var i=location.hash.slice(1);$(".facet_section").toggleClass("off"),t(i)}},!1)},events:function e(){$(".news__individual-wrapper").css("display","block");var a=window.location,t=a.href.split("/"),i=t.pop();Object.keys(tags).map(function(e){$('a[tag="'+e+'"]').before('<img src="/img/icon_tag_'+e+'.svg" class="news__tag-icon" alt="" >')}),"events.html"===i&&$(".tag_name").each(function(){var e=$(this).text();e=$.trim(e);var a=tags[e];$(this).text(a)}),$.ajax({url:"https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo",dataType:"json",async:!0,success:function e(a){function t(e){for(var a=0,t=0;t<i.length;t++)i[0][t]===e&&(a=t);return a}var i=a.values,s=t("Event掲載"),n=t("サービス名称"),l=t("explanation_ja"),c=t("explanation_en"),r=t("画像"),o=0,p=t("URL"),v=window.location,u=v.href.split("/"),m=u.pop(),i=i.filter(function(e){return"Y"===e[s]});"events.html"===m?o=l:"events-en.html"===m&&(o=c);for(var d="",_=0;_<i.length;_++)d+='<article class="article__section event__section-ja"><div class="article__section__inner"><h4>'+i[_][n]+"</h4><p>"+i[_][o]+'</p><a href = "'+i[_][p]+'" class = "page_btn more_btn" > more </a></div></article>';$(".section-wrapper").append(d)}});var s=document.getElementById("main__contents-event").clientHeight;$("ul.sub__navigation-wrapper li").on("click",function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")}),$(".sub_2").on("click",function(){window.scrollTo(0,s)}),$(".sub_1").on("click",function(){window.scrollTo(0,0)}),$(window).scroll(function(){$(this).scrollTop()>s?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<s&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))})},members:function e(){$.when($.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E7%A0%94%E7%A9%B6%E8%80%85ID?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo"),$.getJSON("https://sheets.googleapis.com/v4/spreadsheets/1bSnbUztPDl3nhjQFbScjtTXpQtXOkqZE83NMilziHQs/values/%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E4%B8%80%E8%A6%A7?key=AIzaSyBOc8Fp2aPvhzz06oAur5Rzz7cDp6RZFwo")).done(function(e,a){function t(e,a,t){var i="";return e?("Mail"===t?e="mailto:"+e:"GitHub"===t?e="https://github.com/"+e:"ORCID"===t&&(e="https://orcid.org/"+e),i='<a href="'+e+'" class="'+a+'" target="_blank">'+t+"</a>"):i="",i}function i(a){for(var t=0,i=1;i<e.values.length;i++)e.values[0][i]===a&&(t=i);return t}var s="",n="",l="",c="",r="",o="";e=e[0];for(var p=window.location,v=p.href.split("/"),u=v.pop(),m=i("name ja"),d=i("name en"),h=i("画像"),f=i("position_ja"),g=i("position_en"),b=i("keyword"),w=i("keyword-en"),y=i("ORCID"),k=i("Google Scholar"),j=i("github"),x=i("mail"),E=i("Website"),z=i("いずれのIDも掲載しない"),C=1;C<e.values.length;C++)"客員教授"===e.values[C][f]||"客員准教授"===e.values[C][f]?r+='<li><a href="#'+e.values[C][m]+'">'+e.values[C][m]+"</a></li>":l+='<li><a href="#'+e.values[C][m]+'">'+e.values[C][m]+"</a></li>";for(var C=1;C<e.values.length;C++)"客員教授"===e.values[C][f]||"客員准教授"===e.values[C][f]?o+='<li><a href="#'+e.values[C][d]+'">'+e.values[C][d]+"</a></li>":c+='<li><a href="#'+e.values[C][d]+'">'+e.values[C][d]+"</a></li>";if("members.html"===u){$("#memberList").append(l),$("#memberList-collaborators").append(r);for(var A=1;A<e.values.length;A++){var T=e.values[A][m],D=e.values[A][d],O=e.values[A][h],B=e.values[A][f],I=e.values[A][b],S=e.values[A][y],P=e.values[A][k],q=e.values[A][j],R=e.values[A][x],Q=e.values[A][E],F=e.values[A][z],Y=t(R,"btn-mail","Mail")+t(q,"btn-github","GitHub")+t(S,"btn-orcid","ORCID")+t(P,"btn-gs","Google Scholar")+t(Q,"btn-web","Website");"Yes"===F&&(Y=t(R,"btn-mail","Mail")),"客員教授"===B||"客員准教授"===B?n+='<div class="content__member" id="'+T+'"><div class="repos_image"><img src="./img/member/'+O+'" alt="'+T+'" class="img_member"></div><ul><li class="position">'+B+'</li><li class="repos_name"><span class="name_ja">'+T+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+I+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Y+"</div></li></ul></div>":s+='<div class="content__member" id="'+T+'"><div class="repos_image"><img src="./img/member/'+O+'" alt="'+T+'" class="img_member"></div><ul><li class="position">'+B+'</li><li class="repos_name"><span class="name_ja">'+T+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+I+'</li><li class="PIC">担当サービス：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Y+"</div></li></ul></div>"}}else if("members-en.html"===u){$("#memberList").append(c),$("#memberList-collaborators").append(o);for(var A=1;A<e.values.length;A++){var T=e.values[A][m],D=e.values[A][d],O=e.values[A][h],B=e.values[A][g],I=e.values[A][b],Z=e.values[A][w],S=e.values[A][y],P=e.values[A][k],q=e.values[A][j],R=e.values[A][x],Q=e.values[A][E],F=e.values[A][z],Y="";Y=t(R,"btn-mail","Mail")+t(q,"btn-github","GitHub")+t(S,"btn-orcid","ORCID")+t(P,"btn-gs","Google Scholar")+t(Q,"btn-web","Website"),"Yes"===F&&(Y=t(R,"btn-mail","Mail")),"客員教授"===B||"客員准教授"===B?n+='<div class="content__member" id="'+D+'"><div class="repos_image"><img src="./img/member/'+O+'" alt="'+D+'" class="img_member"></div><ul><li class="position">'+B+'</li><li class="repos_name"><span class="name_ja">'+T+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+Z+'</li><li class="PIC">Charge：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Y+"</div></li></ul></div>":s+='<div class="content__member" id="'+D+'"><div class="repos_image"><img src="./img/member/'+O+'" alt="'+D+'" class="img_member"></div><ul><li class="position">'+B+'</li><li class="repos_name"><span class="name_ja">'+T+'</span><span class="name_en">'+D+'</span></li><li class="keyword">'+Z+'</li><li class="PIC">Charge：<div class="member-list__services"></div></li><li class="links"><div class="btn-box">'+Y+"</div></li></ul></div>"}}$("#member-list").append(s),$("#member-list-collaborators").append(n),a=a[0].values,a=a.filter(function(e){return"Y"===e[0]});for(var N=[],A=2;A<a.length;A++)N.push(a[A][7]),N.push(a[A][8]),N.push(a[A][9]);N=_.uniq(N),N=_.compact(N);var H={};N.map(function(e){for(var t=0;t<a.length;t++)e===a[t][7]&&(H[e]+=a[t][3]+",")}),N.map(function(e){for(var t=0;t<a.length;t++)e===a[t][8]&&(H[e]+=a[t][3]+",")}),N.map(function(e){for(var t=0;t<a.length;t++)e===a[t][9]&&(H[e]+=a[t][3]+",")}),$(".name_ja").each(function(){var e=$(this).text();if(e=e.split(" "),H[e[0]]){var a=H[e[0]];a+="",a=a.replace("undefined",""),a=a.slice(0,-1),a=a.replace(/,/g,", ");var t=$(this).parent().siblings(".PIC").find(".member-list__services");$(t).text(a)}else{var t=$(this).parent().siblings(".PIC");$(t).remove()}})}),$(document).on("click","#memberList li a",function(){setTimeout(function(){var e=$(window).scrollTop(),a=$(window).height(),t=e-.4*a;$(window).scrollTop(t)},0)})},access:function e(){var a=document.getElementById("main__contents-kashiwa").clientHeight;$("ul.sub__navigation-wrapper li").on("click",function(){$("ul.sub__navigation-wrapper li").removeClass("active"),$(this).addClass("active")}),$(".sub_2").on("click",function(){window.scrollTo(0,a)}),$(".sub_1").on("click",function(){window.scrollTo(0,0)}),$(window).scroll(function(){$(this).scrollTop()>a?($("ul.sub__navigation-wrapper li.sub_1").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_2").addClass("active")):$(this).scrollTop()<a&&($("ul.sub__navigation-wrapper li.sub_2").removeClass("active"),$("ul.sub__navigation-wrapper li.sub_1").addClass("active"))})},contact:function e(){}};script.addEventListener("load",function(){$(function(){var e=document.getElementsByTagName("html")[0].dataset.pageType;initialize[e](),console.log(e);var a={index:"index",post:"index",news:"index",about:"about",history:"about",faq:"about",policy:"about",logotype:"about",research:"research",publications:"research",services:"services",references:"services",events:"events",members:"members",access:"access",contact:"contact"},t="",i=Object.keys(a),s="";i.map(function(i){i===e&&(t=a[e])}),s="."+t,$(".header__nav__contents"+s).find("a").css("border-bottom","2px solid white");var n=window.location,l=n.href;$(".lang-en span").on("click",function(){if(l.match(/\/ja\/\d+\/\d+\/\d+\//))window.location.href=l.replace("/ja/","/en/");else if(n.href.match(/services\.html#/)){var a=n.href+"_en",a=a.replace("_ja",""),a=a.replace("services.html","services-en.html");window.location.href=a}else{var a=e+"-en.html";window.location.href=a}}),$(".lang-ja span").on("click",function(){if(l.match(/\/en\/\d+\/\d+\/\d+\//))window.location.href=l.replace("/en/","/ja/");else if(n.href.match(/services-en\.html#/)){var a=n.href+"_ja",a=a.replace("_en",""),a=a.replace("services-en.html","services.html");window.location.href=a}else{var a=e+".html";window.location.href=a}});var c=document.querySelectorAll(".sticky");Stickyfill.add(c)})});