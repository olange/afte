<!--
// After All | Yves Kropf
// $Id$
//
// Librairie de fonctions JavaScript de chiffrage/déchiffrage élémentaire
// d'adresses de courrier électronique.
//
// (c) 2001-2009 Le Petit Atelier de Génie logiciel, Olivier Lange
//
// Consultez http://www.petit-atelier.ch/ pour contacter l'auteur
// et http://www.petit-atelier.ch/email.html pour un formulaire interactif
// permettant de chiffrer les adresses.
//
// Ce script est distribué selon les termes de le GNU General Public License
// (voir http://www.fsf.org/licensing/licenses/gpl.html et la notice qui suit).
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA


function xpgEmailUncrypt( sCrypt) { //v1.1, olange
// Déchiffrage d'une chaîne de caractčres encodée par la fonction XSL 'xpg.util.emailEncrypt'
// ou la fonction 'xpgEmailEncrypt' (voir ci-aprčs).
//
// @param sCrypt  chaîne de caractčres contenant l'adresse de courrier électronique
//   (ou toute chaîne de caractčres) qui doit ętre encodée.
//
// @returns  la chaîne de caractčres encodée.
  var sSrc = "|zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA.@_-=9876543210";
  var sDst = "%0123456789=-_@.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return xpgTranslate( sCrypt, sSrc, sDst);
} // xpgEmailUncrypt


function xpgEmailCrypt( sEmail) { //v1.1, olange
// Chiffrage symétrique d'une chaîne de caractčres. L'encodage, trčs simple et symétrique,
// n'a pour but que d'empęcher des aspirateurs d'adresses de courrier électronique d'identifier
// celles-ci; il est obtenu par une transposition élémentaire de tous les caractčres, y compris
// de ceux qui forment le protocole. Pour décoder, nous transposons simplement dans "l'autre sens".
//
// Note: cette fonction doit ętre en phase avec la fonction 'xpg.util.emailEncrypt' du script
// XSL 'transform/xpage/xpg-util.inc.xsl').
//
// Note: le caractčre pourcent '%' ne doit pas figurer dans la chaîne chiffrée, car il serait
// interprété par le navigateur comme séquence spéciale avant d'ętre déchiffré. On le remplace
// ici par le caractčre pipe '|', qui ne devrait pas se trouver dans une adresse email.
//
// @param sCrypt  chaîne de caractčres contenant l'adresse de courrier électronique
//   (ou toute chaîne de caractčres) qui doit ętre décodée.
//
// @returns  la chaîne de caractčres décodée.
  var sSrc = "%0123456789=-_@.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var sDst = "|zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA.@_-=9876543210";
  return xpgTranslate( sEmail, sSrc, sDst);
} // xpgEmailCrypt


function xpgTranslate( sText, sMapSrc, sMapDst) { //v1.0, olange
// Transpose les caractčres d'une chaîne de caractčres ŕ partir d'une table de correspondance,
// ŕ la façon de la fonction XPath 'translate()'. Les caractčres qui ne figurent pas dans
// la table de correspondance sont transcrits tels quels.
//
// @param sText  chaîne de caractčres dont les caractčres doivent ętre transposés.
//
// @param sMapSrc  chaîne de caractčres représentant la source de la table de correspondance.
//
// @param sMapDest  chaîne de caractčres représentant la destination de la table de correspondance.
//
// @returns  la chaîne de caractčres transposée.
//
// @assert  que les paramčtres sMapSrc et sMapDst doivent contiennent le męme nombre de
//   caractčres, c'est-ŕ-dire qu'il existe une correspondance dans sMapDst pour chaque
//   caractčre de sMapSrc.

  var i,j,c;
  var sResult = '';
  for( i = 0; i < sText.length; i++) {
    c = sText.charAt( i);
    j = sMapSrc.indexOf( c);
    if( j != -1) {
        sResult += sMapDst.charAt( j);
    } else {
        sResult += c;
    };
  } // for
  return sResult;
} // xpgCrypt


function xpgGotoURL( sURL) {
// Commande le chargement d'une nouvelle ressource dans la fenętre
// courante du navigateur. La fonction interrompt le flux de traitement
// et ne retourne pas ŕ l'appelant.

  window.location.href = sURL;
} // xpgGotoURL


function xpgSetStatus( sText) {
// Définit le texte de la barre d'état du navigateur.

  window.status = sText;
  return true;
} // xpgSetStatus


function xpgClearStatus() {
// Supprime le texte de la barre d'état du navigateur.

  window.status = '';
  return true;
} // xpgClearStatus


// end xpg.js -->