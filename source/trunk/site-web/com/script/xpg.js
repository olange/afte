<!--
// After All | Yves Kropf
// $Id$
//
// Librairie de fonctions JavaScript de chiffrage/d�chiffrage �l�mentaire
// d'adresses de courrier �lectronique.
//
// (c) 2001-2009 Le Petit Atelier de G�nie logiciel, Olivier Lange
//
// Consultez http://www.petit-atelier.ch/ pour contacter l'auteur
// et http://www.petit-atelier.ch/email.html pour un formulaire interactif
// permettant de chiffrer les adresses.
//
// Ce script est distribu� selon les termes de le GNU General Public License
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
// D�chiffrage d'une cha�ne de caract�res encod�e par la fonction XSL 'xpg.util.emailEncrypt'
// ou la fonction 'xpgEmailEncrypt' (voir ci-apr�s).
//
// @param sCrypt  cha�ne de caract�res contenant l'adresse de courrier �lectronique
//   (ou toute cha�ne de caract�res) qui doit �tre encod�e.
//
// @returns  la cha�ne de caract�res encod�e.
  var sSrc = "|zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA.@_-=9876543210";
  var sDst = "%0123456789=-_@.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  return xpgTranslate( sCrypt, sSrc, sDst);
} // xpgEmailUncrypt


function xpgEmailCrypt( sEmail) { //v1.1, olange
// Chiffrage sym�trique d'une cha�ne de caract�res. L'encodage, tr�s simple et sym�trique,
// n'a pour but que d'emp�cher des aspirateurs d'adresses de courrier �lectronique d'identifier
// celles-ci; il est obtenu par une transposition �l�mentaire de tous les caract�res, y compris
// de ceux qui forment le protocole. Pour d�coder, nous transposons simplement dans "l'autre sens".
//
// Note: cette fonction doit �tre en phase avec la fonction 'xpg.util.emailEncrypt' du script
// XSL 'transform/xpage/xpg-util.inc.xsl').
//
// Note: le caract�re pourcent '%' ne doit pas figurer dans la cha�ne chiffr�e, car il serait
// interpr�t� par le navigateur comme s�quence sp�ciale avant d'�tre d�chiffr�. On le remplace
// ici par le caract�re pipe '|', qui ne devrait pas se trouver dans une adresse email.
//
// @param sCrypt  cha�ne de caract�res contenant l'adresse de courrier �lectronique
//   (ou toute cha�ne de caract�res) qui doit �tre d�cod�e.
//
// @returns  la cha�ne de caract�res d�cod�e.
  var sSrc = "%0123456789=-_@.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var sDst = "|zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA.@_-=9876543210";
  return xpgTranslate( sEmail, sSrc, sDst);
} // xpgEmailCrypt


function xpgTranslate( sText, sMapSrc, sMapDst) { //v1.0, olange
// Transpose les caract�res d'une cha�ne de caract�res � partir d'une table de correspondance,
// � la fa�on de la fonction XPath 'translate()'. Les caract�res qui ne figurent pas dans
// la table de correspondance sont transcrits tels quels.
//
// @param sText  cha�ne de caract�res dont les caract�res doivent �tre transpos�s.
//
// @param sMapSrc  cha�ne de caract�res repr�sentant la source de la table de correspondance.
//
// @param sMapDest  cha�ne de caract�res repr�sentant la destination de la table de correspondance.
//
// @returns  la cha�ne de caract�res transpos�e.
//
// @assert  que les param�tres sMapSrc et sMapDst doivent contiennent le m�me nombre de
//   caract�res, c'est-�-dire qu'il existe une correspondance dans sMapDst pour chaque
//   caract�re de sMapSrc.

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
// Commande le chargement d'une nouvelle ressource dans la fen�tre
// courante du navigateur. La fonction interrompt le flux de traitement
// et ne retourne pas � l'appelant.

  window.location.href = sURL;
} // xpgGotoURL


function xpgSetStatus( sText) {
// D�finit le texte de la barre d'�tat du navigateur.

  window.status = sText;
  return true;
} // xpgSetStatus


function xpgClearStatus() {
// Supprime le texte de la barre d'�tat du navigateur.

  window.status = '';
  return true;
} // xpgClearStatus


// end xpg.js -->