# React useReducer Spesa

## Descrizione
Questa repository contiene un’esercitazione per imparare ad utilizzare l’hook **useReducer** in React nella gestione dello stato di un carrello/spesa.  
L’obiettivo è creare un componente React che gestisce aggiunta, rimozione e reset degli articoli di spesa usando un reducer, evitando molteplici hook useState separati.

---

## Obiettivi
- Comprendere il concetto di **reducer**: una funzione che prende stato e azione e restituisce il nuovo stato. 
- Imparare a usare `useReducer(reducer, initialState)` al posto di useState quando la logica dello stato è complessa. 
- Gestire l’interfaccia del carrello/spesa: 
  - Stato iniziale contenente items, totale, ecc.  
  - Azioni per aggiungere un articolo, rimuovere un articolo, svuotare il carrello.  
  - Utilizzo di `dispatch({ type: "...", payload: ... })` per modificare lo stato.

---

## Funzionalità principali da implementare
- Definire lo **stato iniziale** del carrello (ad esempio array di articoli vuoto, totale pari a 0)  
- Definire una **funzione reducer(state, action)** che gestisce azioni come:
   - `ADD_ITEM` → aggiunge un articolo e aggiorna totale  
   - `REMOVE_ITEM` → rimuove un articolo e aggiorna totale  
   - `UPDATE_QUANTITY` → aggiornare quanità di un articolo già esistente nel carrello  
- Utilizzare `const [state, dispatch] = useReducer(reducer, initialState)` nel componente principale  
- Creare interfaccia utente con:  
   - Form o input per aggiungere un nuovo articolo (nome, prezzo)  
   - Lista degli articoli attuali nel carrello  
   - Pulsanti per rimuovere articoli o svuotare il carrello  
- Visualizzare il totale aggiornato dinamicamente

---

## Tecnologie utilizzate
- React  
- Hook `useReducer`  
- Componente funzionale  
- Gestione eventi e stato complesso

---

## Scopo della repo
Esercitazione pratica per padroneggiare la gestione dello stato complesso in React con `useReducer`, riducendo la frammentazione dello stato e centralizzando la logica della modifica dello stato in un’unica funzione reducer.
