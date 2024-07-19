import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Willkommen im SQL-Generator';
  userText: string = '';
  SQLtext: string = '';
  tableData: { vtNr: string, docId: string }[] = []; // Dati per la tabella

  processText() {
    const lines = this.userText.split('\n');
    const vtNrSet = new Set<string>(); // Usa un Set per evitare duplicati
    const docIdSet = new Set<string>(); // Usa un Set per evitare duplicati
    const dataMap = new Map<string, string>(); // Mappa per associare vtNr e docId

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (!trimmedLine) continue;

      // Trova i numeri di 16 e fino a 13 cifre
      const docIdMatch = trimmedLine.match(/\b\d{16}\b/);
      const vtNrMatch = trimmedLine.match(/\b\d{1,13}\b/); // Modifica per accettare fino a 13 cifre

      if (docIdMatch && vtNrMatch) {
        const docId = docIdMatch[0];
        const vtNr = vtNrMatch[0].padStart(13, '0'); // Completa a 13 cifre con zeri
        vtNrSet.add(vtNr); // Aggiungi a Set per evitare duplicati
        docIdSet.add(docId); // Aggiungi a Set per evitare duplicati
        dataMap.set(vtNr, docId); // Aggiungi alla mappa con docId associat
      }
    }

    // Crea i comandi SQL con IN
    const vtNrArray = Array.from(vtNrSet);
    const docIdArray = Array.from(docIdSet);
    const vtNrList = vtNrArray.map(vtNr => `'${vtNr}'`).join(', ');
    const docIdList = docIdArray.map(docId => `'${docId}'`).join(', ');

    this.SQLtext =`DELETE FROM VSMADM.SLA WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SAB WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SBP WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPA WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPOSGOZ WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPOSHUK WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPOSGOAE WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPOSPZN WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPOSGBH WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPOSPRUEF WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SABZ WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SDIAG WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SPAFLG WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SLOCK WHERE PVG_BKEY IN (${vtNrList});
DELETE FROM VSMADM.SPATXT WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.TKS011 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW01 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW01R WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW02 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW02R WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW03 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW03R WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW04 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW04R WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW05 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW05R WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW06 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW06R WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW07 WHERE KV_VTG_NR IN (${vtNrList});
DELETE FROM VSMADM.SKW07R WHERE KV_VTG_NR IN (${vtNrList});
UPDATE VSMADM.POK SET PK_SCANN_USER = '', PK_VGNR = 0, PK_STATUS_CD = '1', PK_VG_NAME = 'LOCR', PK_CLASS_CD = 30, FASEL_KEY = 0, FASEL_TXT = '', FASEL_KEY1 = 0, PK_AKT_USER = '793DUNKL' WHERE DOC_ID IN (${docIdList});
    `.replace(/^\s+/gm, '').trim(); // Rimuove spazi finali extra

    // Visualizza i dati nella tabella
    this.tableData = Array.from(dataMap.entries()).map(([vtNr, docId]) => ({ vtNr, docId }));
  }

  cleanText() {
    this.userText = '';
    this.SQLtext = '';
    this.tableData = []; // Pulisce i dati della tabella
  }
  copyText() {
    const textArea = document.createElement('textarea');
    textArea.value = this.SQLtext;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Facoltativo: mostra un messaggio di conferma
    alert('Text in die Zwischenablage kopiert!');
}
}
