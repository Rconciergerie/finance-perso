// Finance Perso — Vincent | app.js

// ============================================================
// DATA
// ============================================================
const DEFAULT_COMPTES = [
  {id:'c1',nom:'Boursorama',type:'courant',solde:1577.07,ordre:1,favori:true},
  {id:'c2',nom:'PayPal',type:'courant',solde:0,ordre:2,favori:false},
  {id:'c3',nom:'Fortuneo',type:'courant',solde:140.23,ordre:3,favori:true},
  {id:'c4',nom:'Fortuneo PEA',type:'investissement',solde:8239.2,ordre:4,favori:false},
  {id:'c5',nom:'LCL Appart',type:'courant',solde:4552.24,ordre:5,favori:false},
  {id:'c6',nom:'LCL Auto',type:'courant',solde:231.07,ordre:6,favori:false},
  {id:'c7',nom:'LCL Courant',type:'courant',solde:989.69,ordre:7,favori:false},
  {id:'c8',nom:'LCL Joint',type:'courant',solde:1653.67,ordre:8,favori:false},
  {id:'c9',nom:'LCL Livret A',type:'epargne',solde:21292.78,ordre:9,favori:false},
  {id:'c10',nom:'LCL LDD',type:'epargne',solde:12152.85,ordre:10,favori:false},
  {id:'c11',nom:'N26',type:'courant',solde:103.58,ordre:11,favori:false}
];

const DEFAULT_CATEGORIES = [
  {id:'cat1',categorie:'Personnel',sousCategorie:'Courses',couleur:'#3B82F6'},
  {id:'cat2',categorie:'Personnel',sousCategorie:'Restaurants',couleur:'#F59E0B'},
  {id:'cat3',categorie:'Personnel',sousCategorie:'Loisirs',couleur:'#8B5CF6'},
  {id:'cat4',categorie:'Personnel',sousCategorie:'Transport',couleur:'#06B6D4'},
  {id:'cat5',categorie:'Personnel',sousCategorie:'Santé',couleur:'#EF4444'},
  {id:'cat6',categorie:'Personnel',sousCategorie:'Résidence principale',couleur:'#10B981'},
  {id:'cat7',categorie:'Personnel',sousCategorie:'Abonnements',couleur:'#64748B'},
  {id:'cat8',categorie:'Immobilier',sousCategorie:'Studio crédit',couleur:'#2563EB'},
  {id:'cat9',categorie:'Immobilier',sousCategorie:'Studio charges',couleur:'#60A5FA'},
  {id:'cat10',categorie:'Immobilier',sousCategorie:'2 pièces crédit',couleur:'#1E40AF'},
  {id:'cat11',categorie:'Immobilier',sousCategorie:'2 pièces charges',couleur:'#3B82F6'},
  {id:'cat12',categorie:'Immobilier',sousCategorie:'Assurance',couleur:'#93C5FD'},
  {id:'cat13',categorie:'Immobilier',sousCategorie:'Travaux',couleur:'#EA580C'},
  {id:'cat14',categorie:'Immobilier',sousCategorie:'Taxe foncière',couleur:'#D97706'},
  {id:'cat15',categorie:'A deux',sousCategorie:'Courses',couleur:'#16A34A'},
  {id:'cat16',categorie:'A deux',sousCategorie:'Restaurants',couleur:'#15803D'},
  {id:'cat17',categorie:'A deux',sousCategorie:'Loisirs',couleur:'#166534'},
  {id:'cat18',categorie:'A deux',sousCategorie:'Sorties',couleur:'#14532D'},
  {id:'cat19',categorie:'Revenus',sousCategorie:'Salaire',couleur:'#EAB308'},
  {id:'cat20',categorie:'Revenus',sousCategorie:'Locatif',couleur:'#CA8A04'},
  {id:'cat21',categorie:'Revenus',sousCategorie:'Autre',couleur:'#A16207'},
  {id:'cat22',categorie:'Epargne',sousCategorie:'Livret A',couleur:'#0891B2'},
  {id:'cat23',categorie:'Epargne',sousCategorie:'LDD',couleur:'#0E7490'},
  {id:'cat24',categorie:'Epargne',sousCategorie:'PEA',couleur:'#155E75'}
];

const DEFAULT_TRICOUNT_CATS = ['Courses','Restaurants / Bar','Shopping / Autre','Cadeaux','Divertissement','Hébergement RP','Exceptionnel','Non catégorisé'];

const DEFAULT_BIENS = [
  {id:'b1',nom:'Studio Airbnb',type:'location-courte',adresse:'',prixAchat:0,dateAchat:'',credit:{montant:0,taux:0,dureeAns:0,dateDebut:''},chargesFixes:[{libelle:'Charges copropriété',montantMensuel:0},{libelle:'Assurance PNO',montantMensuel:0},{libelle:'Taxe foncière',montantAnnuel:0},{libelle:'Internet',montantMensuel:0},{libelle:'Électricité',montantMensuel:0}],chargesVariables:[{libelle:'Ménage',montantMensuel:0}],revenus:[],statut:'actif'},
  {id:'b2',nom:'2 pièces',type:'location-longue',adresse:'',prixAchat:0,dateAchat:'',credit:{montant:0,taux:0,dureeAns:0,dateDebut:''},chargesFixes:[{libelle:'Charges copropriété',montantMensuel:0},{libelle:'Assurance PNO',montantMensuel:0},{libelle:'Taxe foncière',montantAnnuel:0}],chargesVariables:[],revenus:[],statut:'vente'},
  {id:'b3',nom:'Résidence principale',type:'residence-principale',adresse:'',prixAchat:0,dateAchat:'',credit:{montant:0,taux:0,dureeAns:0,dateDebut:''},chargesFixes:[{libelle:'Charges copropriété',montantMensuel:0},{libelle:'Taxe foncière',montantAnnuel:0}],chargesVariables:[],revenus:[],statut:'actif'}
];

const DEFAULT_INVESTISSEMENTS = [{"date": "2024-07-08", "valeurActuelle": 0, "montantInvesti": 179.54, "notes": "7 unités @ 25.65"}, {"date": "2024-08-01", "valeurActuelle": 0, "montantInvesti": 384.59, "notes": "8 unités @ 25.63"}, {"date": "2024-09-02", "valeurActuelle": 0, "montantInvesti": 588.22, "notes": "8 unités @ 25.45"}, {"date": "2024-10-03", "valeurActuelle": 0, "montantInvesti": 794.92, "notes": "8 unités @ 25.84"}, {"date": "2024-11-14", "valeurActuelle": 0, "montantInvesti": 1021.62, "notes": "8 unités @ 28.34"}, {"date": "2024-12-11", "valeurActuelle": 0, "montantInvesti": 1252.34, "notes": "8 unités @ 28.84"}, {"date": "2025-01-06", "valeurActuelle": 0, "montantInvesti": 1742.98, "notes": "17 unités @ 28.86"}, {"date": "2025-02-24", "valeurActuelle": 0, "montantInvesti": 2235.17, "notes": "17 unités @ 28.95"}, {"date": "2025-03-24", "valeurActuelle": 0, "montantInvesti": 2739.69, "notes": "19 unités @ 26.55"}, {"date": "2025-04-04", "valeurActuelle": 0, "montantInvesti": 3227.17, "notes": "20 unités @ 24.37"}, {"date": "2025-05-13", "valeurActuelle": 0, "montantInvesti": 3704.65, "notes": "18 unités @ 26.53"}, {"date": "2025-06-13", "valeurActuelle": 0, "montantInvesti": 4197.14, "notes": "19 unités @ 25.92"}, {"date": "2025-07-23", "valeurActuelle": 0, "montantInvesti": 4685.09, "notes": "18 unités @ 27.11"}, {"date": "2025-08-25", "valeurActuelle": 0, "montantInvesti": 5156.58, "notes": "17 unités @ 27.73"}, {"date": "2025-09-09", "valeurActuelle": 0, "montantInvesti": 5629.86, "notes": "17 unités @ 27.84"}, {"date": "2025-10-06", "valeurActuelle": 0, "montantInvesti": 6124.54, "notes": "17 unités @ 29.10"}, {"date": "2025-11-06", "valeurActuelle": 0, "montantInvesti": 6600.51, "notes": "16 unités @ 29.75"}, {"date": "2025-12-18", "valeurActuelle": 0, "montantInvesti": 7093.08, "notes": "17 unités @ 28.97"}, {"date": "2026-01-20", "valeurActuelle": 8318, "montantInvesti": 7565.64, "notes": "16 unités @ 29.54 — total investi 7565.64"}, {"date": "2026-02-24", "valeurActuelle": 8707.42, "montantInvesti": 8064.59, "notes": "17 unités @ 29.35 — total investi 8064.59"}, {"date": "2026-03-20", "valeurActuelle": 8711.92, "montantInvesti": 8554.9, "notes": "17 unités @ 28.84 — total investi 8554.90"}];

const DEFAULT_TRANSACTIONS = [{"id": "T0001", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "revenu", "compte": "LCL Courant", "categorie": "Revenus", "sousCategorie": "Locatif", "libelle": "Revenus locatifs nets (après impôts)", "montant": 1484.1, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0002", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "revenu", "compte": "LCL Appart", "categorie": "Revenus", "sousCategorie": "Locatif", "libelle": "CA Studio Airbnb janvier", "montant": 1268, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0003", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "revenu", "compte": "LCL Appart", "categorie": "Revenus", "sousCategorie": "Locatif", "libelle": "Travaux diagnostiqueur 2 pièces", "montant": 142.5, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0004", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces crédit", "libelle": "Crédit 2 pièces", "montant": 560, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0005", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Assurance crédit 2 pièces", "montant": 14.55, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0006", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "PNO 2 pièces", "montant": 15, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0007", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Charges 2 pièces", "montant": 72.5, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0008", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Taxe foncière 2 pièces", "montant": 102, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0009", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Compta 2 pièces", "montant": 13.75, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0010", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "CFE 2 pièces", "montant": 14, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0011", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio crédit", "libelle": "Crédit studio", "montant": 498.62, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0012", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Free studoz + Sosh", "montant": 121.95, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0013", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Charges studio syndic immo", "montant": 72.21, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0014", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "EDF studio", "montant": 64, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0015", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Assurance crédit studio Caci", "montant": 19.63, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0016", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Taxe foncière studio", "montant": 82, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0017", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Igloo", "montant": 1.71, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0018", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Superhote", "montant": 57, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0019", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Passurances PNO studio", "montant": 15, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0020", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Compta studio", "montant": 13.75, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0021", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "CFE studio", "montant": 14, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0022", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Crédit maison", "montant": 869.93, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0023", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Assurance prêt immo maison", "montant": 10.13, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0024", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Assurance MRH Gretz", "montant": 24.1, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0025", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Assurance crédit Mimi", "montant": 11.21, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0026", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "EDF/GDF maison", "montant": 119.75, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0027", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Charges maison", "montant": 143.93, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0028", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Orange", "montant": 24.99, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0029", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Taxe foncière maison", "montant": 121, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0030", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Crédit Tesla", "montant": 145.08, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0031", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Assurance Tesla", "montant": 64.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0032", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Santé", "libelle": "Mutuelle pour Mimi", "montant": 27.39, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0033", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "YouTube Premium", "montant": 5.75, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0034", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "Bouygues", "montant": 10.58, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0035", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "Spotify", "montant": 21.24, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0036", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Basic Fit", "montant": 32.49, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0037", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "iCloud perso", "montant": 9.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0038", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "iCloud maman", "montant": 0.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0039", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Xbox Live", "montant": 8.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0040", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Immobilier", "sousCategorie": "Immobilier", "libelle": "Impôts LMNP", "montant": 26, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0041", "date": "2026-01-09", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "LPV vapote", "montant": 40.8, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0042", "date": "2026-01-03", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Dim Sun perso", "montant": 11.9, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0043", "date": "2026-01-03", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Histoire d'or montre", "montant": 9, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0044", "date": "2026-01-06", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Pile plate js plus", "montant": 4.99, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0045", "date": "2026-01-17", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Amazon pince molly", "montant": 24.9, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0046", "date": "2026-01-20", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Restaurants", "libelle": "Macdo", "montant": 9.5, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0047", "date": "2026-01-31", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Estel couture", "montant": 12, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0048", "date": "2026-01-16", "mois": 1, "annee": 2026, "type": "revenu", "compte": "LCL Courant", "categorie": "Revenus", "sousCategorie": "Autre", "libelle": "Remboursement Orange résiliation tel", "montant": 13.33, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0049", "date": "2026-01-20", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Frais voiture divers", "montant": 7.09, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0050", "date": "2026-01-03", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Frais voiture divers", "montant": 1.15, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0051", "date": "2026-01-11", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Frais voiture divers", "montant": 8.92, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0052", "date": "2026-01-10", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Frais voiture divers", "montant": 5.82, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0053", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Courses", "libelle": "Courses janvier", "montant": 433.83, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0054", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Restaurants", "libelle": "Restau janvier", "montant": 428.23, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0055", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Sorties", "libelle": "Transport à deux", "montant": 49.36, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0056", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Sorties", "libelle": "Hébergement", "montant": 13.9, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0057", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Sorties", "libelle": "Divertissement", "montant": 4.99, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0058", "date": "2026-01-01", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Sorties", "libelle": "Exceptionnel à deux", "montant": 1231.98, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0059", "date": "2026-01-15", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "BIP Parking", "montant": 25.99, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0060", "date": "2026-01-17", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Clé portail non fonctionnelle", "montant": 4.59, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0061", "date": "2026-01-17", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Lampe papy", "montant": 18.27, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0062", "date": "2026-01-18", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Bon clé portail maman", "montant": 5.29, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0063", "date": "2026-01-18", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Restaurants", "libelle": "Macdo", "montant": 25.8, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0064", "date": "2026-01-26", "mois": 1, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Étiquette bal", "montant": 5, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0065", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "revenu", "compte": "LCL Courant", "categorie": "Revenus", "sousCategorie": "Locatif", "libelle": "Revenus locatifs nets (après impôts)", "montant": 1484.1, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0066", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "revenu", "compte": "LCL Appart", "categorie": "Revenus", "sousCategorie": "Locatif", "libelle": "CA Studio Airbnb février", "montant": 2210.92, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0067", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces crédit", "libelle": "Crédit 2 pièces", "montant": 560, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0068", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Assurance crédit 2 pièces Kereis", "montant": 14.27, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0069", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "PNO 2 pièces", "montant": 15.3, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0070", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Charges 2 pièces", "montant": 72.5, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0071", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Taxe foncière 2 pièces", "montant": 102, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0072", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "Compta 2 pièces", "montant": 13.75, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0073", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "2 pièces charges", "libelle": "CFE 2 pièces", "montant": 14, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0074", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio crédit", "libelle": "Crédit studio", "montant": 498.62, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0075", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Free studoz + Sosh", "montant": 67.13, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0076", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Charges studio syndic immo", "montant": 72.22, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0077", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "EDF studio", "montant": 64, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0078", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Assurance crédit studio Caci", "montant": 19.63, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0079", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Taxe foncière studio", "montant": 82, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0080", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Superhote", "montant": 57, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0081", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Passurances PNO studio", "montant": 15, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0082", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "Compta studio", "montant": 13.75, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0083", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Appart", "categorie": "Immobilier", "sousCategorie": "Studio charges", "libelle": "CFE studio", "montant": 14, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0084", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Crédit maison", "montant": 869.93, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0085", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Assurance prêt immo maison", "montant": 10.13, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0086", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Assurance MRH Gretz", "montant": 24.1, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0087", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Assurance crédit Mimi", "montant": 11.21, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0088", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "EDF/GDF maison", "montant": 155, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0089", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Charges maison", "montant": 143.93, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0090", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Orange", "montant": 24.99, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0091", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Résidence principale", "libelle": "Taxe foncière maison", "montant": 121, "part": 0.5, "recurrent": true, "pointe": false}, {"id": "T0092", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Crédit Tesla", "montant": 145.08, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0093", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Assurance Tesla", "montant": 64.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0094", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Santé", "libelle": "Mutuelle pour Mimi", "montant": 27.39, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0095", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "YouTube Premium", "montant": 5.75, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0096", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "Bouygues", "montant": 8.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0097", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "Spotify", "montant": 21.24, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0098", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Basic Fit", "montant": 32.49, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0099", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "iCloud perso", "montant": 9.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0100", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "iCloud maman", "montant": 0.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0101", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Xbox Live", "montant": 8.99, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0102", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Immobilier", "sousCategorie": "Immobilier", "libelle": "Impôts LMNP", "montant": 26, "part": 1, "recurrent": true, "pointe": false}, {"id": "T0103", "date": "2026-02-04", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Restaurants", "libelle": "Macdo perso", "montant": 14.2, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0104", "date": "2026-02-27", "mois": 2, "annee": 2026, "type": "depense", "compte": "Boursorama", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Paypal Antoine", "montant": 40, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0105", "date": "2026-02-26", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "LPV vapote", "montant": 36.5, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0106", "date": "2026-02-17", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Inactif Fortuneo", "montant": 9, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0107", "date": "2026-02-24", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Santé", "libelle": "Pharmacie", "montant": 4, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0108", "date": "2026-02-02", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Restaurants", "libelle": "Macdo perso", "montant": 9.5, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0109", "date": "2026-02-10", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Hub cheque Amazon", "montant": 0.9, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0110", "date": "2026-02-12", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Nuages", "montant": 23, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0111", "date": "2026-02-17", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "La Poste prise syndic", "montant": 16.11, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0112", "date": "2026-02-18", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Santé", "libelle": "Dermato Serris", "montant": 90, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0113", "date": "2026-02-23", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Abonnements", "libelle": "Claude IA", "montant": 21.6, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0114", "date": "2026-02-24", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Restaurants", "libelle": "Rialto Alexis", "montant": 14.8, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0115", "date": "2026-02-28", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "AT24 ma partie", "montant": 114.5, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0116", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Frais voiture", "montant": 10, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0117", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Auto", "categorie": "Personnel", "sousCategorie": "Transport", "libelle": "Frais voiture maman x4", "montant": 40, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0118", "date": "2026-02-17", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Sorties", "libelle": "Péage Disney", "montant": 4.3, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0119", "date": "2026-02-02", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Sorties", "libelle": "Avocat Dimitri", "montant": 700, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0120", "date": "2026-02-18", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Loisirs", "libelle": "Brico poignée volet", "montant": 31.9, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0121", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Courses", "libelle": "Courses février", "montant": 444.17, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0122", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Joint", "categorie": "A deux", "sousCategorie": "Restaurants", "libelle": "Restau février", "montant": 398.4, "part": 0.5, "recurrent": false, "pointe": false}, {"id": "T0123", "date": "2026-02-01", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "Émilie doit paypal Antoine", "montant": 20, "part": 1, "recurrent": false, "pointe": false}, {"id": "T0124", "date": "2026-02-28", "mois": 2, "annee": 2026, "type": "depense", "compte": "LCL Courant", "categorie": "Personnel", "sousCategorie": "Loisirs", "libelle": "AT24 partie Émilie me doit", "montant": 80, "part": 1, "recurrent": false, "pointe": false}];

// Normalise Part in DEFAULT_TRANSACTIONS (JSON stores as decimal 0-1 → convert to %)
const DEFAULT_TRANSACTIONS_RAW = DEFAULT_TRANSACTIONS;
DEFAULT_TRANSACTIONS.forEach(t => {
  if (t.part !== undefined && t.part <= 1.0 && t.part > 0) t.part = Math.round(t.part * 100);
});

const DEFAULT_SOLDES_MENSUELS = [
  ...DEFAULT_COMPTES.map(c => ({compte:c.nom, mois:3, annee:2026, solde:c.solde}))
];

const DEFAULT_CHARGES_RECURRENTES = [];
// Structure d'une charge : {id, libelle, montant, compte, categorie, sousCategorie, attribution, part, actif}
// attribution: 'Personnel' | 'Studio Airbnb' | '2 pièces' | 'Résidence principale' | 'À deux'
// part: 0-100 (% à ma charge)

// ============================================================
// APP
// ============================================================
const APP = {
  state: {
    section: 'dashboard',
    mois: new Date().getMonth()+1,
    annee: new Date().getFullYear(),
    editTxId: null,
    immoTab: 'synthese'
  },
  data: null,
  charts: {},

  // ---- INIT ----
  init() {
    this.data = this.loadData();          // localStorage → rendu immédiat
    this.bindNav();
    this.navigate('dashboard');
    this.checkMonthAlert();
    document.getElementById('p-script-url').value = this.data.config.scriptUrl || '';
    if (this.data.config.scriptUrl) {
      this.loadFromSheets();              // async : rafraîchit depuis Sheets si dispo
    } else {
      document.getElementById('sync-status').textContent = '● Non connecté';
    }
  },

  loadData() {
    try {
      const saved = localStorage.getItem('vfp_data');
      if (saved) {
        const d = JSON.parse(saved);
        // Normalise Part: convert decimal (0-1) to percentage (0-100) if needed
        if (d.transactions) {
          d.transactions = d.transactions.map(t => ({
            ...t,
            part: (t.part !== undefined && t.part <= 1.0 && t.part > 0) ? Math.round(t.part * 100) : (t.part || 100)
          }));
        }
        // Migration: add missing fields introduced in Phase 2
        if (!d.chargesRecurrentes) d.chargesRecurrentes = [];
        return d;
      }
    } catch(e){}
    return {
      config: {scriptUrl:'', favoriteAccounts:['Fortuneo','Boursorama']},
      comptes: JSON.parse(JSON.stringify(DEFAULT_COMPTES)),
      categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
      transactions: JSON.parse(JSON.stringify(DEFAULT_TRANSACTIONS)),
      investissements: JSON.parse(JSON.stringify(DEFAULT_INVESTISSEMENTS)),
      soldesMensuels: JSON.parse(JSON.stringify(DEFAULT_SOLDES_MENSUELS)),
      biens: JSON.parse(JSON.stringify(DEFAULT_BIENS)),
      chargesRecurrentes: JSON.parse(JSON.stringify(DEFAULT_CHARGES_RECURRENTES)),
      tricount: []
    };
  },

  save() {
    try { localStorage.setItem('vfp_data', JSON.stringify(this.data)); } catch(e){}
    // Push vers Sheets avec debounce 3s (évite spam si plusieurs saves rapides)
    if (this.data.config.scriptUrl) {
      clearTimeout(this._syncTimer);
      this._syncTimer = setTimeout(() => this.pushToSheets(), 3000);
    }
  },

  // ---- SYNC GOOGLE SHEETS ----

  // Charge les données depuis Sheets et rafraîchit l'UI
  async loadFromSheets() {
    const url = this.data.config.scriptUrl;
    if (!url) return;
    const statusEl = document.getElementById('sync-status');
    statusEl.textContent = '↻ Chargement...';
    try {
      const resp = await fetch(url + '?action=load');
      const result = await resp.json();
      if (result.status === 'ok' && result.data) {
        // Fusionner : on garde la config locale (scriptUrl), on prend le reste de Sheets
        const remote = result.data;
        remote.config = { ...remote.config, scriptUrl: url };
        // Normalisation Part (sécurité)
        if (remote.transactions) {
          remote.transactions = remote.transactions.map(t => ({
            ...t,
            part: (t.part !== undefined && t.part <= 1.0 && t.part > 0)
              ? Math.round(t.part * 100) : (t.part || 100)
          }));
        }
        if (!remote.chargesRecurrentes) remote.chargesRecurrentes = [];
        this.data = remote;
        localStorage.setItem('vfp_data', JSON.stringify(this.data));
        this.renderSection(this.state.section);
        const hhmm = new Date().toLocaleTimeString('fr-FR', {hour:'2-digit',minute:'2-digit'});
        statusEl.textContent = '● Connecté · ' + hhmm;
        document.getElementById('p-script-url').value = url;
        const resEl = document.getElementById('p-sync-result');
        if (resEl) resEl.innerHTML = '<span style="color:var(--green)">✓ Données chargées depuis Google Sheets · ' + hhmm + '</span>';
      } else if (result.status === 'ok' && !result.data) {
        // Sheets vide → on pousse nos données locales
        statusEl.textContent = '● Connecté (init)';
        const resEl = document.getElementById('p-sync-result');
        if (resEl) resEl.innerHTML = '<span style="color:var(--green)">✓ Connecté — envoi initial des données en cours...</span>';
        this.pushToSheets();
      } else {
        statusEl.textContent = '⚠ Erreur Sheets';
      }
    } catch(e) {
      statusEl.textContent = '● Hors ligne';
    }
  },

  // Pousse toutes les données locales vers Sheets
  async pushToSheets() {
    const url = this.data.config.scriptUrl;
    if (!url) return;
    const statusEl = document.getElementById('sync-status');
    statusEl.textContent = '↻ Sync...';
    try {
      const resp = await fetch(url, {
        method:  'POST',
        headers: { 'Content-Type': 'text/plain' }, // évite preflight CORS
        body:    JSON.stringify({ action: 'saveData', data: this.data })
      });
      const result = await resp.json();
      if (result.status === 'ok') {
        const hhmm = new Date().toLocaleTimeString('fr-FR', {hour:'2-digit',minute:'2-digit'});
        statusEl.textContent = '● Connecté · ' + hhmm;
        const resEl = document.getElementById('p-sync-result');
        if (resEl) resEl.innerHTML = '<span style="color:var(--green)">✓ Sync Google Sheets · ' + hhmm + '</span>';
      } else {
        statusEl.textContent = '⚠ Erreur sync';
        console.warn('Sheets sync error:', result);
      }
    } catch(e) {
      statusEl.textContent = '⚠ Sync échouée';
      console.warn('Sheets push failed:', e);
    }
  },

  bindNav() {
    document.querySelectorAll('[data-section]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.section));
    });
  },

  navigate(section) {
    this.state.section = section;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-item, .bnav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('s-'+section).classList.add('active');
    document.querySelectorAll('[data-section="'+section+'"]').forEach(n => n.classList.add('active'));
    const titles = {dashboard:'Tableau de bord',comptes:'Comptes',transactions:'Transactions',charges:'Charges fixes',immobilier:'Immobilier',investissements:'Investissements',parametres:'Paramètres'};
    document.getElementById('section-title').textContent = titles[section]||'';
    const hideMonthNav = ['comptes','parametres','immobilier','investissements'];
    document.getElementById('month-nav').style.display = hideMonthNav.includes(section) ? 'none' : '';
    document.getElementById('topbar-action').style.display = 'none'; // Desktop: sections have own buttons
    const actionLabels = {dashboard:'+ Ajouter',transactions:'+ Ajouter',comptes:'Saisir soldes',charges:'+ Charge',immobilier:'+ Bien',investissements:'+ Valorisation'};
    document.getElementById('topbar-action').innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> '+(actionLabels[section]||'+ Ajouter');
    this.renderSection(section);
  },

  topbarAction() {
    // Only used on mobile via FAB — desktop sections have their own buttons
    this.openAddTx();
  },

  renderSection(s) {
    if(s==='dashboard') this.renderDashboard();
    if(s==='comptes') this.renderComptes();
    if(s==='transactions') this.renderTransactions();
    if(s==='charges') this.renderCharges();
    if(s==='immobilier') this.renderImmobilier();
    if(s==='investissements') this.renderInvestissements();
    if(s==='parametres') this.renderParametres();
  },

  prevMonth() { this.state.mois--; if(this.state.mois<1){this.state.mois=12;this.state.annee--;} this.updateMonthLabel(); this.renderSection(this.state.section); },
  nextMonth() { this.state.mois++; if(this.state.mois>12){this.state.mois=1;this.state.annee++;} this.updateMonthLabel(); this.renderSection(this.state.section); },
  updateMonthLabel() {
    const labels = ['','Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    document.getElementById('month-label').textContent = labels[this.state.mois]+' '+this.state.annee;
  },

  // ---- HELPERS ----
  fmt(n, sign=false) {
    const s = new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(Math.abs(n))+' €';
    if(sign) return (n>=0?'+ ':' − ')+s;
    return (n<0?'− ':'')+s;
  },
  fmtSimple(n) { return new Intl.NumberFormat('fr-FR',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n)+' €'; },
  fmtDate(d) { if(!d) return ''; const [y,m,day]=d.split('-'); return day+'/'+m+'/'+y; },
  monthLabel(m,y) { const L=['','Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc']; return L[m]+' '+y; },

  getTxForMonth(m,a) { return this.data.transactions.filter(t=>t.mois==m&&t.annee==a); },
  getRevenus(txs) { return txs.filter(t=>t.type==='revenu').reduce((s,t)=>s+t.montant*t.part/100,0); },
  getDepenses(txs) { return txs.filter(t=>t.type==='depense').reduce((s,t)=>s+t.montant*t.part/100,0); },
  getTotalLiquidites() { 
    return this.data.comptes.filter(c=>c.type!=='investissement').reduce((s,c)=>s+c.solde,0); 
  },
  getCatColor(cat, sousCat) {
    const c = this.data.categories.find(c=>c.categorie===cat&&c.sousCategorie===sousCat);
    return c?c.couleur:'#94A3B8';
  },

  nextId(prefix) {
    const existing = this.data.transactions.map(t=>t.id).filter(id=>id.startsWith(prefix)).map(id=>parseInt(id.replace(prefix,''))||0);
    return prefix+(String(Math.max(0,...existing)+1).padStart(4,'0'));
  },

  // ---- DASHBOARD ----
  renderDashboard() {
    const {mois,annee} = this.state;
    const txs = this.getTxForMonth(mois,annee);
    const rev = this.getRevenus(txs);
    const dep = this.getDepenses(txs);
    const solde = rev - dep;
    const liq = this.getTotalLiquidites();
    const nonPointes = this.data.transactions.filter(t=>!t.pointe);

    // Alert fin de mois
    const today = new Date();
    const alertEl = document.getElementById('dash-alert');
    if(today.getDate()>=25) {
      alertEl.innerHTML = `<div class="alert alert-orange"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Fin de mois approche — pensez à saisir les soldes de vos comptes !</div>`;
    } else { alertEl.innerHTML=''; }

    // KPIs
    document.getElementById('dash-kpis').innerHTML = `
      <div class="card kpi">
        <div class="kpi-label">Liquidités totales</div>
        <div class="kpi-value">${this.fmtSimple(liq)}</div>
        <div class="kpi-sub">Hors PEA &amp; investissements</div>
      </div>
      <div class="card kpi">
        <div class="kpi-label">Revenus ${this.monthLabel(mois,annee)}</div>
        <div class="kpi-value text-green">${this.fmtSimple(rev)}</div>
      </div>
      <div class="card kpi">
        <div class="kpi-label">Dépenses ${this.monthLabel(mois,annee)}</div>
        <div class="kpi-value text-red">${this.fmtSimple(dep)}</div>
      </div>
      <div class="card kpi">
        <div class="kpi-label">Solde mensuel</div>
        <div class="kpi-value ${solde>=0?'text-green':'text-red'}">${this.fmt(solde,true)}</div>
        <div><span class="kpi-badge ${solde>=0?'badge-green':'badge-red'}">${solde>=0?'✓ Excédent':'⚠ Déficit'}</span></div>
      </div>`;

    // Charts
    this.renderChartLiquidites();
    this.renderChartDepenses(txs);

    // Unpointed
    const upEl = document.getElementById('dash-unpointed');
    const nonP = this.data.transactions.filter(t=>!t.pointe).slice(0,8);
    if(!nonP.length) { upEl.innerHTML='<div class="empty"><p>Toutes les transactions sont pointées ✓</p></div>'; return; }
    upEl.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Date</th><th>Libellé</th><th>Compte</th><th style="text-align:right">Montant</th><th></th></tr></thead><tbody>
    ${nonP.map(t=>`<tr>
      <td>${this.fmtDate(t.date)}</td>
      <td><span style="font-weight:500">${t.libelle}</span></td>
      <td><span class="text-muted">${t.compte}</span></td>
      <td class="tx-montant" style="text-align:right;color:${t.type==='revenu'?'var(--green)':'var(--red)'}">${t.type==='revenu'?'+':'−'}${this.fmtSimple(t.montant*t.part/100)}</td>
      <td><button class="tx-pointe" onclick="APP.togglePointe('${t.id}')" title="Marquer pointé"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></button></td>
    </tr>`).join('')}
    </tbody></table></div>`;
  },

  renderChartLiquidites() {
    const ctx = document.getElementById('ch-liquidites');
    if(!ctx) return;
    if(this.charts.liquidites) this.charts.liquidites.destroy();
    const months = [];
    const values = [];
    for(let i=11;i>=0;i--) {
      let m = new Date(); m.setMonth(m.getMonth()-i);
      const mo=m.getMonth()+1, yr=m.getFullYear();
      const soldes = this.data.soldesMensuels.filter(s=>s.mois===mo&&s.annee===yr&&s.compte!=='Fortuneo PEA');
      const total = soldes.reduce((sum,s)=>sum+s.solde,0);
      months.push(this.monthLabel(mo,yr));
      values.push(total>0?total:null);
    }
    this.charts.liquidites = new Chart(ctx,{type:'line',data:{labels:months,datasets:[{data:values,borderColor:'#2563EB',backgroundColor:'rgba(37,99,235,.08)',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'#2563EB',spanGaps:true}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:11}}},y:{grid:{color:'#F1F5F9'},ticks:{callback:v=>(v/1000).toFixed(0)+'k€',font:{size:11}}}}}});
  },

  renderChartDepenses(txs) {
    const ctx = document.getElementById('ch-depenses');
    if(!ctx) return;
    if(this.charts.depenses) this.charts.depenses.destroy();
    const bycat = {};
    txs.filter(t=>t.type==='depense').forEach(t=>{ bycat[t.categorie]=(bycat[t.categorie]||0)+t.montant*t.part/100; });
    const cats = Object.keys(bycat);
    const vals = cats.map(c=>bycat[c]);
    const colors = cats.map(c=>({Personnel:'#3B82F6',Immobilier:'#2563EB','A deux':'#16A34A',Epargne:'#0891B2',Revenus:'#EAB308'}[c]||'#94A3B8'));
    if(!cats.length) { ctx.parentElement.innerHTML='<div class="empty" style="height:200px;display:flex;align-items:center;justify-content:center"><p>Aucune dépense ce mois</p></div>'; return; }
    this.charts.depenses = new Chart(ctx,{type:'doughnut',data:{labels:cats,datasets:[{data:vals,backgroundColor:colors,borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11},padding:10}}}}});
  },

  checkMonthAlert() {
    this.updateMonthLabel();
  },

  // ---- COMPTES ----
  renderComptes() {
    const grid = document.getElementById('comptes-grid');
    const typeColors = {courant:'badge-blue',epargne:'badge-green',investissement:'badge-orange'};
    const typeLabels = {courant:'Courant',epargne:'Épargne',investissement:'Investissement'};
    grid.innerHTML = this.data.comptes.sort((a,b)=>a.ordre-b.ordre).map(c=>`
      <div class="card compte-card">
        <div style="display:flex;justify-content:space-between;align-items:start">
          <div>
            <div class="compte-nom">${c.nom}${c.favori?' <span title=\"Favori mobile\" style=\"color:#F59E0B;font-size:12px\">★</span>':''}</div>
            <div class="compte-type-badge ${typeColors[c.type]||''}">${typeLabels[c.type]||c.type}</div>
          </div>
          <div style="display:flex;gap:4px">
            <button class="icon-btn" onclick="APP.editCompte('${c.id}')" title="Modifier">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z"/></svg>
            </button>
            <button class="icon-btn" onclick="APP.deleteCompte('${c.id}')" title="Supprimer" style="color:var(--red)">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            </button>
          </div>
        </div>
        <div class="compte-solde ${c.solde>=0?'text-green':'text-red'}">${this.fmtSimple(c.solde)}</div>
      </div>`).join('');
    this.renderChartPatrimoine();
  },

  renderChartPatrimoine() {
    const ctx = document.getElementById('ch-patrimoine');
    if(!ctx) return;
    if(this.charts.patrimoine) this.charts.patrimoine.destroy();
    const months=[]; const totals=[];
    for(let i=11;i>=0;i--){
      let d=new Date(); d.setMonth(d.getMonth()-i);
      const mo=d.getMonth()+1,yr=d.getFullYear();
      const soldes=this.data.soldesMensuels.filter(s=>s.mois===mo&&s.annee===yr&&s.compte!=='Fortuneo PEA');
      const t=soldes.reduce((s,x)=>s+x.solde,0);
      months.push(this.monthLabel(mo,yr)); totals.push(t>0?t:null);
    }
    this.charts.patrimoine=new Chart(ctx,{type:'bar',data:{labels:months,datasets:[{data:totals,backgroundColor:'rgba(37,99,235,.15)',borderColor:'#2563EB',borderWidth:2,borderRadius:6}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{grid:{display:false},ticks:{font:{size:11}}},y:{ticks:{callback:v=>(v/1000).toFixed(0)+'k€',font:{size:11}},grid:{color:'#F1F5F9'}}}}});
  },

  // ---- TRANSACTIONS ----
  renderTransactions() {
    // Populate filters
    const compteEl=document.getElementById('f-compte');
    compteEl.innerHTML='<option value="">Tous les comptes</option>'+this.data.comptes.map(c=>`<option>${c.nom}</option>`).join('');
    const catEl=document.getElementById('f-cat');
    const cats=[...new Set(this.data.categories.map(c=>c.categorie))];
    catEl.innerHTML='<option value="">Toutes catégories</option>'+cats.map(c=>`<option>${c}</option>`).join('');
    this.renderTxTable();
    this.renderTricountSection();
  },

  renderTxTable() {
    const {mois,annee}=this.state;
    const fc=document.getElementById('f-compte').value;
    const fcat=document.getElementById('f-cat').value;
    const ftype=document.getElementById('f-type').value;
    const fp=document.getElementById('f-pointe').value;
    const fs=document.getElementById('f-search').value.toLowerCase();
    let txs=this.getTxForMonth(mois,annee);
    if(fc) txs=txs.filter(t=>t.compte===fc);
    if(fcat) txs=txs.filter(t=>t.categorie===fcat);
    if(ftype) txs=txs.filter(t=>t.type===ftype);
    if(fp==='0') txs=txs.filter(t=>!t.pointe);
    if(fp==='1') txs=txs.filter(t=>t.pointe);
    if(fs) txs=txs.filter(t=>t.libelle.toLowerCase().includes(fs)||t.categorie.toLowerCase().includes(fs)||t.compte.toLowerCase().includes(fs));
    txs.sort((a,b)=>a.date>b.date?-1:1);

    const rev=this.getRevenus(txs), dep=this.getDepenses(txs);
    document.getElementById('tx-summary').innerHTML=`
      <div class="card kpi"><div class="kpi-label">Revenus</div><div class="kpi-value text-green">${this.fmtSimple(rev)}</div></div>
      <div class="card kpi"><div class="kpi-label">Dépenses</div><div class="kpi-value text-red">${this.fmtSimple(dep)}</div></div>
      <div class="card kpi"><div class="kpi-label">Solde</div><div class="kpi-value ${rev-dep>=0?'text-green':'text-red'}">${this.fmt(rev-dep,true)}</div></div>`;

    const tbody=document.getElementById('tx-tbody');
    const empty=document.getElementById('tx-empty');
    if(!txs.length){tbody.innerHTML='';empty.style.display='';return;}
    empty.style.display='none';
    const catColors={Personnel:'#EFF6FF',Immobilier:'#EFF6FF','A deux':'#F0FDF4',Epargne:'#ECFEFF',Revenus:'#FFFBEB'};
    const catTextColors={Personnel:'#2563EB',Immobilier:'#1E40AF','A deux':'#16A34A',Epargne:'#0891B2',Revenus:'#D97706'};
    tbody.innerHTML=txs.map(t=>`<tr>
      <td><button class="tx-pointe ${t.pointe?'done':''}" onclick="APP.togglePointe('${t.id}')">${t.pointe?'<svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\"><polyline points=\"20 6 9 17 4 12\"/></svg>':''}</button></td>
      <td style="color:var(--text-3)">${this.fmtDate(t.date)}</td>
      <td><span style="font-weight:500">${t.libelle}</span>${t.recurrent?' <span title=\"Récurrent\" style=\"font-size:10px;color:var(--text-3)\">↺</span>':''}</td>
      <td><span class="tx-cat" style="background:${catColors[t.categorie]||'#F1F5F9'};color:${catTextColors[t.categorie]||'#475569'}">${t.sousCategorie}</span></td>
      <td style="color:var(--text-2);font-size:12px">${t.type==='virement-interne'?`${t.compte} → ${t.compteDest||'?'}`:t.compte}</td>
      <td class="tx-montant" style="text-align:right;color:${t.type==='revenu'?'var(--green)':(t.type==='virement'||t.type==='virement-interne'?'var(--text-2)':'var(--red)')}">
        ${t.type==='revenu'?'+':(t.type==='virement'||t.type==='virement-interne')?'⇄':' −'}${this.fmtSimple(t.montant*(t.part||100)/100)}
        ${(t.part||100)<100?` <span style="font-size:11px;color:var(--text-3)">(${t.part}%)</span>`:''}
      </td>
      <td><div class="tx-actions">
        <button class="icon-btn" onclick="APP.editTx('${t.id}')" title="Modifier"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z"/></svg></button>
        <button class="icon-btn" onclick="APP.deleteTx('${t.id}')" style="color:var(--red)" title="Supprimer"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg></button>
      </div></td>
    </tr>`).join('');
  },

  togglePointe(id) {
    const tx=this.data.transactions.find(t=>t.id===id);
    if(tx){tx.pointe=!tx.pointe;this.save();this.renderSection(this.state.section);}
  },

  renderTricountSection() {
    const {mois,annee}=this.state;
    const saved=this.data.tricount.find(t=>t.mois===mois&&t.annee===annee)||{cats:{}};
    const container=document.getElementById('tricount-rows');
    container.innerHTML=DEFAULT_TRICOUNT_CATS.map(cat=>{
      const val=saved.cats?.[cat]||0;
      return `<div class="tricount-row">
        <div class="tricount-cat">${cat}</div>
        <input type="number" class="tricount-input" data-cat="${cat}" value="${val}" step="0.01" min="0" oninput="APP.updateTricountTotal()">
      </div>`;
    }).join('');
    this.updateTricountTotal();
  },

  updateTricountTotal() {
    const inputs=document.querySelectorAll('.tricount-input');
    let total=0; inputs.forEach(i=>total+=parseFloat(i.value)||0);
    document.getElementById('tricount-total').textContent=this.fmtSimple(total);
  },

  saveTricountData() {
    const {mois,annee}=this.state;
    const inputs=document.querySelectorAll('.tricount-input');
    const cats={};
    inputs.forEach(i=>{ if(parseFloat(i.value)) cats[i.dataset.cat]=parseFloat(i.value); });
    const idx=this.data.tricount.findIndex(t=>t.mois===mois&&t.annee===annee);
    if(idx>=0) this.data.tricount[idx].cats=cats;
    else this.data.tricount.push({mois,annee,cats});
    this.save();
    this.showToast('Tricount enregistré ✓');
  },

  // ---- CHARGES FIXES ----
  renderCharges() {
    const charges = this.data.chargesRecurrentes;
    const {mois, annee} = this.state;

    // KPIs
    const actives = charges.filter(c => c.actif);
    const totalMensuel = actives.reduce((s, c) => s + c.montant * c.part / 100, 0);
    const alreadyGenerated = this.data.transactions.filter(t =>
      t.mois === mois && t.annee === annee && t.recurrent && t.type === 'depense'
    ).length;
    const byAttrib = {};
    actives.forEach(c => {
      const k = c.attribution || 'Personnel';
      byAttrib[k] = (byAttrib[k] || 0) + c.montant * c.part / 100;
    });

    document.getElementById('charges-kpis').innerHTML = `
      <div class="card kpi">
        <div class="kpi-label">Total mensuel (ma part)</div>
        <div class="kpi-value text-red">${this.fmtSimple(totalMensuel)}</div>
        <div class="kpi-sub">${actives.length} charge${actives.length>1?'s':''} active${actives.length>1?'s':''}</div>
      </div>
      <div class="card kpi">
        <div class="kpi-label">Générées ce mois</div>
        <div class="kpi-value ${alreadyGenerated>0?'text-green':'text-red'}">${alreadyGenerated}</div>
        <div class="kpi-sub">${alreadyGenerated>0?'✓ Déjà générées':'Cliquer ⚡ pour générer'}</div>
      </div>
      <div class="card kpi">
        <div class="kpi-label">Répartition</div>
        <div class="kpi-sub" style="margin-top:6px">${Object.entries(byAttrib).map(([k,v])=>`<div style="display:flex;justify-content:space-between;font-size:12px"><span>${k}</span><span style="font-weight:600">${this.fmtSimple(v)}</span></div>`).join('')||'<span class="text-muted">—</span>'}</div>
      </div>`;

    // Liste des charges
    const list = document.getElementById('charges-list');
    if (!charges.length) {
      list.innerHTML = '<div class="empty"><p>Aucune charge fixe configurée — cliquez sur "+ Charge" pour commencer</p></div>';
      return;
    }

    const attribColors = {
      'Personnel':'#EFF6FF','Studio Airbnb':'#FFF7ED','2 pièces':'#FDF4FF','Résidence principale':'#F0FDF4','À deux':'#F0FDF4'
    };
    const attribTextColors = {
      'Personnel':'#2563EB','Studio Airbnb':'#EA580C','2 pièces':'#9333EA','Résidence principale':'#16A34A','À deux':'#15803D'
    };

    list.innerHTML = `<div class="table-wrap"><table>
      <thead><tr>
        <th>Actif</th><th>Libellé</th><th>Attribution</th><th>Catégorie</th><th>Compte</th><th style="text-align:right">Montant</th><th style="text-align:right">Ma part</th><th></th>
      </tr></thead>
      <tbody>${charges.map(c => {
        const partMontant = c.montant * c.part / 100;
        return `<tr style="${c.actif?'':'opacity:0.45'}">
          <td><button class="tx-pointe ${c.actif?'done':''}" onclick="APP.toggleChargeActif('${c.id}')" title="${c.actif?'Désactiver':'Activer'}">
            ${c.actif?'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>':''}
          </button></td>
          <td style="font-weight:500">${c.libelle}</td>
          <td><span class="tx-cat" style="background:${attribColors[c.attribution]||'#F1F5F9'};color:${attribTextColors[c.attribution]||'#475569'}">${c.attribution||'Personnel'}</span></td>
          <td><span class="text-muted" style="font-size:12px">${c.sousCategorie}</span></td>
          <td><span class="text-muted" style="font-size:12px">${c.compte}</span></td>
          <td style="text-align:right;color:var(--red)">${this.fmtSimple(c.montant)}</td>
          <td style="text-align:right;font-weight:600;color:var(--red)">
            ${c.part < 100 ? `${this.fmtSimple(partMontant)} <span style="font-size:11px;color:var(--text-3)">(${c.part}%)</span>` : this.fmtSimple(partMontant)}
          </td>
          <td><div class="tx-actions">
            <button class="icon-btn" onclick="APP.editCharge('${c.id}')" title="Modifier"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z"/></svg></button>
            <button class="icon-btn" onclick="APP.deleteCharge('${c.id}')" style="color:var(--red)" title="Supprimer"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg></button>
          </div></td>
        </tr>`;
      }).join('')}</tbody>
    </table></div>
    <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:13px;color:var(--text-2)">${actives.length} charges actives sur ${charges.length}</span>
      <span style="font-size:14px;font-weight:700;color:var(--red)">Total ma part : ${this.fmtSimple(totalMensuel)} / mois</span>
    </div>`;
  },

  generateMonthCharges() {
    const {mois, annee} = this.state;
    const actives = this.data.chargesRecurrentes.filter(c => c.actif);
    if (!actives.length) { this.showToast('Aucune charge active à générer', 'red'); return; }

    // Check if already generated
    const alreadyDone = this.data.transactions.filter(t =>
      t.mois === mois && t.annee === annee && t.recurrent
    );
    if (alreadyDone.length > 0) {
      if (!confirm(`${alreadyDone.length} transaction(s) récurrentes existent déjà pour ce mois. Générer quand même les nouvelles ?`)) return;
    }

    const labels = ['','01','02','03','04','05','06','07','08','09','10','11','12'];
    const dateStr = `${annee}-${labels[mois]}-01`;
    let count = 0;
    actives.forEach(c => {
      // Check if this specific charge was already generated this month
      const exists = this.data.transactions.find(t =>
        t.mois === mois && t.annee === annee && t.libelle === c.libelle && t.recurrent && t.chargeId === c.id
      );
      if (exists) return;

      this.data.transactions.push({
        id: this.nextId('T'),
        type: 'depense',
        date: dateStr,
        mois, annee,
        compte: c.compte,
        categorie: c.categorie,
        sousCategorie: c.sousCategorie,
        libelle: c.libelle,
        montant: c.montant,
        part: c.part,
        recurrent: true,
        chargeId: c.id,
        pointe: false
      });
      count++;
    });

    this.save();
    this.showToast(count > 0 ? `${count} charge${count>1?'s':''} générée${count>1?'s':''} ✓` : 'Toutes les charges sont déjà générées ce mois');
    this.renderCharges();
  },

  openAddCharge() {
    this.state.editChargeId = null;
    document.getElementById('modal-charge-title').textContent = 'Nouvelle charge fixe';
    document.getElementById('ch-libelle').value = '';
    document.getElementById('ch-montant').value = '';
    document.getElementById('ch-part').value = 100;
    document.getElementById('ch-attribution').value = 'Personnel';
    this.populateChargeSelects();
    this.openModal('modal-charge');
  },

  editCharge(id) {
    const c = this.data.chargesRecurrentes.find(c => c.id === id);
    if (!c) return;
    this.state.editChargeId = id;
    document.getElementById('modal-charge-title').textContent = 'Modifier la charge fixe';
    document.getElementById('ch-libelle').value = c.libelle;
    document.getElementById('ch-montant').value = c.montant;
    document.getElementById('ch-part').value = c.part;
    document.getElementById('ch-attribution').value = c.attribution || 'Personnel';
    this.populateChargeSelects();
    document.getElementById('ch-compte').value = c.compte;
    document.getElementById('ch-categorie').value = c.categorie;
    this.updateChargeSousCats();
    document.getElementById('ch-sous-categorie').value = c.sousCategorie;
    this.openModal('modal-charge');
  },

  populateChargeSelects() {
    const cEl = document.getElementById('ch-compte');
    cEl.innerHTML = this.data.comptes.map(c => `<option>${c.nom}</option>`).join('');
    const cats = [...new Set(this.data.categories.map(c => c.categorie))];
    const catEl = document.getElementById('ch-categorie');
    catEl.innerHTML = cats.map(c => `<option>${c}</option>`).join('');
    this.updateChargeSousCats();
  },

  updateChargeSousCats() {
    const cat = document.getElementById('ch-categorie').value;
    const subs = this.data.categories.filter(c => c.categorie === cat).map(c => c.sousCategorie);
    document.getElementById('ch-sous-categorie').innerHTML = subs.map(s => `<option>${s}</option>`).join('');
  },

  saveCharge() {
    const libelle = document.getElementById('ch-libelle').value.trim();
    const montant = parseFloat(document.getElementById('ch-montant').value) || 0;
    const compte = document.getElementById('ch-compte').value;
    const categorie = document.getElementById('ch-categorie').value;
    const sousCategorie = document.getElementById('ch-sous-categorie').value;
    const attribution = document.getElementById('ch-attribution').value;
    const part = parseInt(document.getElementById('ch-part').value) || 100;
    if (!libelle || !montant) { alert('Libellé et montant obligatoires'); return; }

    if (this.state.editChargeId) {
      const c = this.data.chargesRecurrentes.find(c => c.id === this.state.editChargeId);
      if (c) Object.assign(c, {libelle, montant, compte, categorie, sousCategorie, attribution, part});
    } else {
      const id = 'cr' + (this.data.chargesRecurrentes.length + 1) + '_' + Date.now().toString(36);
      this.data.chargesRecurrentes.push({id, libelle, montant, compte, categorie, sousCategorie, attribution, part, actif: true});
    }
    this.save();
    this.closeModal('modal-charge');
    this.renderCharges();
    this.showToast('Charge enregistrée ✓');
  },

  deleteCharge(id) {
    if (!confirm('Supprimer cette charge fixe ?')) return;
    this.data.chargesRecurrentes = this.data.chargesRecurrentes.filter(c => c.id !== id);
    this.save();
    this.renderCharges();
    this.showToast('Charge supprimée');
  },

  toggleChargeActif(id) {
    const c = this.data.chargesRecurrentes.find(c => c.id === id);
    if (c) { c.actif = !c.actif; this.save(); this.renderCharges(); }
  },

  // ---- IMMOBILIER ----
  renderImmobilier() {
    const tabs=document.getElementById('immo-tabs');
    const tabList=[{id:'synthese',label:'📊 Synthèse'},...this.data.biens.map(b=>({id:b.id,label:'🏠 '+b.nom}))];
    tabs.innerHTML=tabList.map(t=>`<div class="tab ${this.state.immoTab===t.id?'active':''}" onclick="APP.immoTab('${t.id}')">${t.label}</div>`).join('');
    if(this.state.immoTab==='synthese') this.renderImmoSynthese();
    else this.renderBienDetail(this.data.biens.find(b=>b.id===this.state.immoTab));
  },

  immoTab(id) { this.state.immoTab=id; this.renderImmobilier(); },

  renderImmoSynthese() {
    const content=document.getElementById('immo-content');
    const rows=this.data.biens.map(b=>{
      const chargesMensuelles=b.chargesFixes.reduce((s,c)=>s+(c.montantMensuel||0)+(c.montantAnnuel||0)/12,0)+b.chargesVariables.reduce((s,c)=>s+(c.montantMensuel||0),0);
      const credit=this.calcMensualite(b.credit);
      const totalCharges=chargesMensuelles+credit;
      const revMensuel=this.getRevenuBien(b);
      const cashflow=revMensuel-totalCharges;
      return {b,chargesMensuelles,credit,totalCharges,revMensuel,cashflow};
    });
    const totalRev=rows.reduce((s,r)=>s+r.revMensuel,0);
    const totalChg=rows.reduce((s,r)=>s+r.totalCharges,0);
    const totalCF=rows.reduce((s,r)=>s+r.cashflow,0);
    content.innerHTML=`
      <div class="grid-3" style="margin-bottom:20px">
        <div class="card kpi"><div class="kpi-label">Revenus locatifs/mois</div><div class="kpi-value text-green">${this.fmtSimple(totalRev)}</div></div>
        <div class="card kpi"><div class="kpi-label">Charges totales/mois</div><div class="kpi-value text-red">${this.fmtSimple(totalChg)}</div></div>
        <div class="card kpi"><div class="kpi-label">Cashflow mensuel</div><div class="kpi-value ${totalCF>=0?'text-green':'text-red'}">${this.fmt(totalCF,true)}</div></div>
      </div>
      <div class="card">
        <div class="card-title">Détail par bien</div>
        <div class="table-wrap"><table>
          <thead><tr><th>Bien</th><th>Statut</th><th>Crédit/mois</th><th>Charges/mois</th><th>Revenus/mois</th><th style="text-align:right">Cashflow</th></tr></thead>
          <tbody>${rows.map(r=>`<tr>
            <td style="font-weight:500">${r.b.nom}</td>
            <td><span class="kpi-badge ${r.b.statut==='vente'?'badge-orange':'badge-green'}">${r.b.statut==='vente'?'En vente':r.b.statut==='actif'?'Actif':r.b.statut}</span></td>
            <td>${r.credit>0?this.fmtSimple(r.credit):'<span class="text-muted">—</span>'}</td>
            <td>${this.fmtSimple(r.chargesMensuelles)}</td>
            <td>${r.revMensuel>0?'<span class="text-green">'+this.fmtSimple(r.revMensuel)+'</span>':'<span class="text-muted">—</span>'}</td>
            <td style="text-align:right;font-weight:600;color:${r.cashflow>=0?'var(--green)':'var(--red)'}">
              ${this.fmt(r.cashflow,true)}
            </td>
          </tr>`).join('')}</tbody>
        </table></div>
      </div>`;
  },

  calcMensualite(credit) {
    if(!credit.montant||!credit.taux||!credit.dureeAns) return 0;
    const r=credit.taux/100/12, n=credit.dureeAns*12;
    return credit.montant*(r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
  },

  calcCapitalRestant(credit, atDate) {
    if(!credit.montant||!credit.taux||!credit.dureeAns||!credit.dateDebut) return 0;
    const start=new Date(credit.dateDebut);
    const end=new Date(atDate||new Date());
    const moisEcoulés=Math.max(0,(end.getFullYear()-start.getFullYear())*12+(end.getMonth()-start.getMonth()));
    const r=credit.taux/100/12, n=credit.dureeAns*12;
    if(moisEcoulés>=n) return 0;
    const mensualite=this.calcMensualite(credit);
    return credit.montant*Math.pow(1+r,moisEcoulés)-mensualite*(Math.pow(1+r,moisEcoulés)-1)/r;
  },

  getRevenuBien(b) {
    const now=new Date();
    const rev=b.revenus.filter(r=>r.mois===now.getMonth()+1&&r.annee===now.getFullYear());
    return rev.reduce((s,r)=>s+r.montant,0);
  },

  renderBienDetail(b) {
    if(!b) return;
    const capitalRestant=this.calcCapitalRestant(b.credit);
    const mensualite=this.calcMensualite(b.credit);
    const content=document.getElementById('immo-content');
    content.innerHTML=`
      <div class="card bien-card" style="margin-bottom:16px">
        <div class="bien-header">
          <div>
            <div class="bien-title">${b.nom}</div>
            <div class="bien-type">${{'location-courte':'Location courte durée (Airbnb)','location-longue':'Location longue durée','residence-principale':'Résidence principale'}[b.type]||b.type}</div>
          </div>
          <div style="display:flex;gap:8px;align-items:center">
            <select onchange="APP.updateBienStatut('${b.id}',this.value)" style="padding:5px 8px;border:1px solid var(--border);border-radius:7px;font-size:12px">
              <option value="actif" ${b.statut==='actif'?'selected':''}>Actif</option>
              <option value="vente" ${b.statut==='vente'?'selected':''}>En vente</option>
              <option value="vendu" ${b.statut==='vendu'?'selected':''}>Vendu</option>
            </select>
            <button class="btn btn-sm" style="background:var(--red-l);color:var(--red);border:1px solid #FECACA" onclick="APP.deleteBien('${b.id}')">Supprimer ce bien</button>
          </div>
        </div>
        <div class="card-title">Crédit immobilier</div>
        <div class="credit-grid">
          <div class="credit-item"><label>Montant emprunté (€)</label><input type="number" value="${b.credit.montant||''}" onchange="APP.updateCredit('${b.id}','montant',this.value)" step="100" placeholder="ex: 120000"></div>
          <div class="credit-item"><label>Taux annuel (%)</label><input type="number" value="${b.credit.taux||''}" onchange="APP.updateCredit('${b.id}','taux',this.value)" step="0.01" placeholder="ex: 2.5"></div>
          <div class="credit-item"><label>Durée (ans)</label><input type="number" value="${b.credit.dureeAns||''}" onchange="APP.updateCredit('${b.id}','dureeAns',this.value)" placeholder="ex: 20"></div>
          <div class="credit-item"><label>Date de début</label><input type="date" value="${b.credit.dateDebut||''}" onchange="APP.updateCredit('${b.id}','dateDebut',this.value)"></div>
          <div class="credit-item"><label>Mensualité calculée</label><input type="text" value="${mensualite>0?this.fmtSimple(mensualite):'—'}" readonly style="background:var(--bg)"></div>
          <div class="credit-item"><label>Prix d'achat total (€)</label><input type="number" value="${b.prixAchat||''}" onchange="APP.updateBienField('${b.id}','prixAchat',this.value)" placeholder="ex: 145000"></div>
        </div>
        ${capitalRestant>0?`
        <div class="capital-restant">
          <div><div style="font-size:11px;color:var(--text-3)">Capital restant dû aujourd'hui</div><div class="value">${this.fmtSimple(capitalRestant)}</div></div>
          <div class="simulator">
            <label>Si je vends le :</label>
            <input type="month" id="sim-${b.id}" oninput="APP.updateSimulator('${b.id}')">
            <span id="sim-result-${b.id}" class="result"></span>
          </div>
        </div>`:'<div class="alert alert-blue" style="margin-top:12px">Renseignez les infos de crédit pour calculer le capital restant dû</div>'}
      </div>
      <div class="grid-2">
        <div class="card">
          <div class="card-title">Charges fixes mensuelles</div>
          ${b.chargesFixes.map((c,i)=>`<div class="tricount-row">
            <div class="tricount-cat">${c.libelle}${c.montantAnnuel!==undefined?' <span style="font-size:10px;color:var(--text-3)">(annuel)</span>':''}</div>
            <input type="number" class="tricount-input" value="${c.montantMensuel||c.montantAnnuel||0}" step="0.01" onchange="APP.updateCharge('${b.id}','fixes',${i},this.value)"> 
          </div>`).join('')}
          <button class="btn btn-sm btn-secondary" style="margin-top:10px" onclick="APP.addCharge('${b.id}','fixes')">+ Charge</button>
        </div>
        <div class="card">
          <div class="card-title">Charges variables</div>
          ${b.chargesVariables.map((c,i)=>`<div class="tricount-row">
            <div class="tricount-cat">${c.libelle}</div>
            <input type="number" class="tricount-input" value="${c.montantMensuel||0}" step="0.01" onchange="APP.updateCharge('${b.id}','variables',${i},this.value)">
          </div>`).join('')}
          <button class="btn btn-sm btn-secondary" style="margin-top:10px" onclick="APP.addCharge('${b.id}','variables')">+ Charge variable</button>
        </div>
      </div>`;
  },

  updateCredit(bienId, field, val) {
    const b=this.data.biens.find(b=>b.id===bienId);
    if(b){ b.credit[field]=field==='dateDebut'?val:parseFloat(val)||0; this.save(); this.renderBienDetail(b); }
  },
  updateBienField(bienId,field,val) {
    const b=this.data.biens.find(b=>b.id===bienId);
    if(b){ b[field]=parseFloat(val)||0; this.save(); }
  },
  updateBienStatut(bienId,val) {
    const b=this.data.biens.find(b=>b.id===bienId);
    if(b){ b.statut=val; this.save(); }
  },
  updateCharge(bienId, type, idx, val) {
    const b=this.data.biens.find(b=>b.id===bienId);
    if(b){ 
      const arr=type==='fixes'?b.chargesFixes:b.chargesVariables;
      if(arr[idx]){ 
        if(arr[idx].montantAnnuel!==undefined) arr[idx].montantAnnuel=parseFloat(val)||0;
        else arr[idx].montantMensuel=parseFloat(val)||0;
        this.save(); 
      } 
    }
  },
  addCharge(bienId, type) {
    const label=prompt('Nom de la charge :');
    if(!label) return;
    const b=this.data.biens.find(b=>b.id===bienId);
    if(b){
      const arr=type==='fixes'?b.chargesFixes:b.chargesVariables;
      arr.push({libelle:label,montantMensuel:0});
      this.save(); this.renderBienDetail(b);
    }
  },
  updateSimulator(bienId) {
    const b=this.data.biens.find(b=>b.id===bienId);
    const input=document.getElementById('sim-'+bienId);
    const result=document.getElementById('sim-result-'+bienId);
    if(!b||!input.value) return;
    const date=new Date(input.value+'-01');
    const capital=this.calcCapitalRestant(b.credit, date);
    result.textContent=capital>0?'→ '+this.fmtSimple(capital)+' à solder':'Crédit remboursé ✓';
  },
  deleteBien(id) {
    if (!confirm('Supprimer définitivement ce bien ? Cette action est irréversible.')) return;
    this.data.biens = this.data.biens.filter(b => b.id !== id);
    this.save();
    this.state.immoTab = 'synthese';
    this.renderImmobilier();
    this.showToast('Bien supprimé');
  },

  openAddBien() {
    const nom=prompt('Nom du bien (ex: Studio rue Victor Hugo) :');
    if(!nom) return;
    const type=prompt('Type (location-courte / location-longue / residence-principale) :','location-longue');
    const id='b'+(this.data.biens.length+1);
    this.data.biens.push({id,nom,type:type||'location-longue',adresse:'',prixAchat:0,dateAchat:'',credit:{montant:0,taux:0,dureeAns:0,dateDebut:''},chargesFixes:[],chargesVariables:[],revenus:[],statut:'actif'});
    this.save(); this.state.immoTab=id; this.renderImmobilier();
  },

  // ---- INVESTISSEMENTS ----
  renderInvestissements() {
    const invs=this.data.investissements;
    const last=invs[invs.length-1]||{};
    const totalInvesti=last.montantInvesti||0;
    const valActuelle=last.valeurActuelle||0;
    const perf=valActuelle-totalInvesti;
    const perfPct=totalInvesti?perf/totalInvesti*100:0;
    document.getElementById('invest-kpis').innerHTML=`
      <div class="card kpi"><div class="kpi-label">Total investi (PEA)</div><div class="kpi-value">${this.fmtSimple(totalInvesti)}</div></div>
      <div class="card kpi"><div class="kpi-label">Valeur actuelle</div><div class="kpi-value text-blue">${this.fmtSimple(valActuelle)}</div></div>
      <div class="card kpi"><div class="kpi-label">Plus/Moins-value</div><div class="kpi-value ${perf>=0?'text-green':'text-red'}">${this.fmt(perf,true)}</div></div>
      <div class="card kpi"><div class="kpi-label">Performance</div><div class="kpi-value ${perfPct>=0?'text-green':'text-red'}">${perfPct>=0?'+':''}${perfPct.toFixed(2)} %</div></div>`;
    this.renderChartPEA();
    const tbody=document.getElementById('pea-tbody');
    tbody.innerHTML=[...invs].reverse().map(inv=>{
      const p=(inv.valeurActuelle-inv.montantInvesti)/inv.montantInvesti*100;
      return `<tr>
        <td>${this.fmtDate(inv.date)}</td>
        <td>${this.fmtSimple(inv.montantInvesti)}</td>
        <td>${inv.valeurActuelle>0?'<span class="text-blue">'+this.fmtSimple(inv.valeurActuelle)+'</span>':'<span class="text-muted">—</span>'}</td>
        <td style="text-align:right"><span class="kpi-badge ${p>=0?'badge-green':'badge-red'}">${p>=0?'+':''}${p.toFixed(1)}%</span></td>
        <td><button class="icon-btn" onclick="APP.deleteInvest('${inv.date}')" style="color:var(--red)"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg></button></td>
      </tr>`;
    }).join('');
  },

  renderChartPEA() {
    const ctx=document.getElementById('ch-pea');
    if(!ctx) return;
    if(this.charts.pea) this.charts.pea.destroy();
    const invs=this.data.investissements;
    const labels=invs.map(i=>this.fmtDate(i.date).slice(3)); // MM/YYYY
    const investi=invs.map(i=>i.montantInvesti);
    const valeur=invs.map(i=>i.valeurActuelle||null);
    this.charts.pea=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Investi',data:investi,borderColor:'#94A3B8',borderDash:[4,4],tension:.3,pointRadius:3},{label:'Valeur',data:valeur,borderColor:'#2563EB',backgroundColor:'rgba(37,99,235,.08)',fill:true,tension:.3,pointRadius:3,spanGaps:true}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top',labels:{font:{size:11}}}},scales:{x:{ticks:{font:{size:10}},grid:{display:false}},y:{ticks:{callback:v=>v.toFixed(0)+'€',font:{size:11}},grid:{color:'#F1F5F9'}}}}});
    const ctx2=document.getElementById('ch-perf');
    if(!ctx2) return;
    if(this.charts.perf) this.charts.perf.destroy();
    const perfs=invs.map(i=>i.valeurActuelle&&i.montantInvesti?((i.valeurActuelle-i.montantInvesti)/i.montantInvesti*100):null);
    this.charts.perf=new Chart(ctx2,{type:'bar',data:{labels,datasets:[{data:perfs,backgroundColor:perfs.map(p=>p&&p>=0?'rgba(22,163,74,.2)':'rgba(220,38,38,.2)'),borderColor:perfs.map(p=>p&&p>=0?'#16A34A':'#DC2626'),borderWidth:2,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{font:{size:10}},grid:{display:false}},y:{ticks:{callback:v=>v.toFixed(1)+'%',font:{size:11}},grid:{color:'#F1F5F9'}}}}});
  },

  deleteInvest(date) {
    if(!confirm('Supprimer cette entrée ?')) return;
    this.data.investissements=this.data.investissements.filter(i=>i.date!==date);
    this.save(); this.renderInvestissements();
  },

  // ---- PARAMETRES ----
  renderParametres() {
    // Favoris
    const el=document.getElementById('p-favoris-list');
    el.innerHTML=this.data.comptes.map(c=>`
      <label style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);cursor:pointer">
        <input type="checkbox" ${c.favori?'checked':''} onchange="APP.toggleFavori('${c.id}',this.checked)" style="width:auto">
        <span style="font-size:13px">${c.nom}</span>
      </label>`).join('');
    // Categories
    const catEl=document.getElementById('p-categories-list');
    const grouped={};
    this.data.categories.forEach(c=>{ if(!grouped[c.categorie]) grouped[c.categorie]=[]; grouped[c.categorie].push(c); });
    catEl.innerHTML=Object.entries(grouped).map(([cat,subs])=>`
      <div style="margin-bottom:10px">
        <div style="font-size:12px;font-weight:600;color:var(--text-2);margin-bottom:4px">${cat}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${subs.map(s=>`
          <span class="tx-cat" style="background:#F1F5F9;color:#475569;cursor:pointer" title="Cliquer pour supprimer" onclick="APP.deleteCategorie('${s.id}')">
            ${s.sousCategorie} ×
          </span>`).join('')}</div>
      </div>`).join('');
  },

  toggleFavori(id, val) {
    const c=this.data.comptes.find(c=>c.id===id);
    if(c){ c.favori=val; this.save(); }
  },

  deleteCategorie(id) {
    if(!confirm('Supprimer cette catégorie ?')) return;
    this.data.categories=this.data.categories.filter(c=>c.id!==id);
    this.save(); this.renderParametres();
  },

  openAddCategorie() {
    const cat=prompt('Catégorie principale :');
    const sousCat=prompt('Sous-catégorie :');
    if(!cat||!sousCat) return;
    const id='cat'+(this.data.categories.length+1);
    this.data.categories.push({id,categorie:cat,sousCategorie:sousCat,couleur:'#94A3B8'});
    this.save(); this.renderParametres();
  },

  saveScriptUrl() {
    const url = document.getElementById('p-script-url').value.trim();
    this.data.config.scriptUrl = url;
    localStorage.setItem('vfp_data', JSON.stringify(this.data)); // save sans déclencher push
    const resEl = document.getElementById('p-sync-result');
    if (!url) {
      document.getElementById('sync-status').textContent = '● Non connecté';
      resEl.innerHTML = '';
      return;
    }
    resEl.innerHTML = '<span style="color:var(--text-3)">Test en cours...</span>';
    // Ping + load depuis Sheets
    fetch(url + '?action=ping')
      .then(r => r.json())
      .then(d => {
        if (d.status === 'ok') {
          resEl.innerHTML = '<span style="color:var(--green)">✓ Connecté — chargement des données...</span>';
          this.loadFromSheets();
        } else {
          resEl.innerHTML = '<span style="color:var(--red)">⚠ Script répond mais erreur : ' + (d.message||'') + '</span>';
        }
      })
      .catch(() => {
        resEl.innerHTML = '<span style="color:var(--red)">✗ Impossible de joindre le script — vérifiez l\'URL et le déploiement.</span>';
        document.getElementById('sync-status').textContent = '● Erreur connexion';
      });
  },

  syncGSheets() {
    if (!this.data.config.scriptUrl) {
      alert("Renseignez d'abord l'URL du script dans Paramètres.");
      this.navigate('parametres');
      return;
    }
    // Force un rechargement depuis Sheets puis un push
    this.loadFromSheets().then(() => this.pushToSheets());
    this.showToast('Synchronisation en cours...');
  },

  exportJSON() {
    const blob=new Blob([JSON.stringify(this.data,null,2)],{type:'application/json'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
    a.download='finance-perso-'+new Date().toISOString().slice(0,10)+'.json'; a.click();
  },
  triggerImport() { document.getElementById('import-file').click(); },
  importJSON(e) {
    const file=e.target.files[0]; if(!file) return;
    const r=new FileReader(); r.onload=ev=>{ try{ this.data=JSON.parse(ev.target.result); this.save(); this.renderSection(this.state.section); this.showToast('Import OK ✓'); }catch(err){ alert('Fichier invalide'); } }; r.readAsText(file);
  },

  // ---- MODALS ----
  openAddTx() {
    this.state.editTxId=null;
    document.getElementById('modal-tx-title').textContent='Nouvelle transaction';
    const today=new Date().toISOString().slice(0,10);
    document.getElementById('tx-date').value=today;
    document.getElementById('tx-libelle').value='';
    document.getElementById('tx-montant').value='';
    document.getElementById('tx-part').value=100;
    document.getElementById('tx-recurrent').checked=false;
    document.getElementById('tx-type').value='depense';
    this.populateTxSelects();
    const favs=this.data.comptes.filter(c=>c.favori);
    if(favs.length) document.getElementById('tx-compte').value=favs[0].nom;
    this.updateTxForm();
    this.openModal('modal-tx');
  },

  editTx(id) {
    const tx=this.data.transactions.find(t=>t.id===id);
    if(!tx) return;
    this.state.editTxId=id;
    document.getElementById('modal-tx-title').textContent='Modifier la transaction';
    document.getElementById('tx-date').value=tx.date;
    document.getElementById('tx-libelle').value=tx.libelle;
    document.getElementById('tx-montant').value=tx.montant;
    document.getElementById('tx-part').value=tx.part||100;
    document.getElementById('tx-recurrent').checked=tx.recurrent;
    document.getElementById('tx-type').value=tx.type;
    this.populateTxSelects();
    document.getElementById('tx-compte').value=tx.compte;
    this.updateTxForm(); // apply visibility rules for virement-interne
    if(tx.type!=='virement-interne'){
      document.getElementById('tx-categorie').value=tx.categorie;
      this.updateSousCats();
      document.getElementById('tx-sous-categorie').value=tx.sousCategorie;
    } else if(tx.compteDest){
      document.getElementById('tx-compte-dest').value=tx.compteDest;
    }
    this.openModal('modal-tx');
  },

  populateTxSelects() {
    const compteOptions = this.data.comptes.map(c=>`<option>${c.nom}</option>`).join('');
    document.getElementById('tx-compte').innerHTML = compteOptions;
    document.getElementById('tx-compte-dest').innerHTML = compteOptions;
    const cats=[...new Set(this.data.categories.map(c=>c.categorie))];
    const catEl=document.getElementById('tx-categorie');
    catEl.innerHTML=cats.map(c=>`<option>${c}</option>`).join('');
    this.updateSousCats();
  },

  updateSousCats() {
    const cat=document.getElementById('tx-categorie').value;
    const subs=this.data.categories.filter(c=>c.categorie===cat).map(c=>c.sousCategorie);
    document.getElementById('tx-sous-categorie').innerHTML=subs.map(s=>`<option>${s}</option>`).join('');
  },

  updateTxForm() {
    this.updateSousCats();
    const type = document.getElementById('tx-type').value;
    const isVirInt = type === 'virement-interne';
    // Show/hide compte destination field
    document.getElementById('tx-compte-dest-group').style.display = isVirInt ? '' : 'none';
    // Hide category fields for virements internes
    const catRow = document.getElementById('tx-cat-row');
    if (catRow) catRow.style.display = isVirInt ? 'none' : '';
    // Relabel compte field
    const compteLabel = document.getElementById('tx-compte-label');
    if (compteLabel) compteLabel.textContent = isVirInt ? 'Compte source' : 'Compte';
    // Populate dest if needed
    if (isVirInt) {
      const destEl = document.getElementById('tx-compte-dest');
      destEl.innerHTML = this.data.comptes.map(c => `<option>${c.nom}</option>`).join('');
    }
  },

  saveTx() {
    const type=document.getElementById('tx-type').value;
    const date=document.getElementById('tx-date').value;
    const libelle=document.getElementById('tx-libelle').value.trim();
    const montant=parseFloat(document.getElementById('tx-montant').value)||0;
    const compte=document.getElementById('tx-compte').value;
    const part=parseInt(document.getElementById('tx-part').value)||100;
    const recurrent=document.getElementById('tx-recurrent').checked;

    // Virement interne : catégorie neutre, deux comptes
    const isVirInt = type === 'virement-interne';
    const categorie = isVirInt ? 'Virement' : document.getElementById('tx-categorie').value;
    const sousCategorie = isVirInt ? 'Virement interne' : document.getElementById('tx-sous-categorie').value;
    const compteDest = isVirInt ? document.getElementById('tx-compte-dest').value : '';

    if(!libelle||!montant||!date){ alert('Remplissez tous les champs obligatoires'); return; }
    if(isVirInt && compte === compteDest){ alert('Les comptes source et destinataire doivent être différents'); return; }
    const [y,m]=date.split('-').map(Number);

    if(this.state.editTxId) {
      const tx=this.data.transactions.find(t=>t.id===this.state.editTxId);
      if(tx) Object.assign(tx,{type,date,mois:m,annee:y,compte,compteDest,categorie,sousCategorie,libelle,montant,part,recurrent});
    } else {
      this.data.transactions.push({id:this.nextId('T'),type,date,mois:m,annee:y,compte,compteDest,categorie,sousCategorie,libelle,montant,part,recurrent,pointe:false});
    }
    this.save(); this.closeModal('modal-tx'); this.renderSection(this.state.section);
  },

  deleteTx(id) {
    if(!confirm('Supprimer cette transaction ?')) return;
    this.data.transactions=this.data.transactions.filter(t=>t.id!==id);
    this.save(); this.renderSection(this.state.section);
  },

  openSaisiesSoldes() {
    const {mois,annee}=this.state;
    const labels=['','Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
    document.getElementById('soldes-month-label').textContent=labels[mois]+' '+annee;
    const form=document.getElementById('soldes-form');
    form.innerHTML=this.data.comptes.sort((a,b)=>a.ordre-b.ordre).map(c=>{
      const saved=this.data.soldesMensuels.find(s=>s.compte===c.nom&&s.mois===mois&&s.annee===annee);
      return `<div class="tricount-row">
        <div class="tricount-cat" style="font-weight:500">${c.nom}</div>
        <input type="number" class="tricount-input" id="solde-${c.id}" value="${saved?saved.solde:c.solde}" step="0.01">
      </div>`;
    }).join('');
    this.openModal('modal-soldes');
  },

  saveSoldes() {
    const {mois,annee}=this.state;
    this.data.comptes.forEach(c=>{
      const val=parseFloat(document.getElementById('solde-'+c.id).value)||0;
      c.solde=val;
      const idx=this.data.soldesMensuels.findIndex(s=>s.compte===c.nom&&s.mois===mois&&s.annee===annee);
      if(idx>=0) this.data.soldesMensuels[idx].solde=val;
      else this.data.soldesMensuels.push({compte:c.nom,mois,annee,solde:val});
    });
    this.save(); this.closeModal('modal-soldes'); this.renderSection(this.state.section);
    this.showToast('Soldes enregistrés ✓');
  },

  openAddCompte() { this.openModal('modal-compte'); },
  saveNewCompte() {
    const nom=document.getElementById('new-compte-nom').value.trim();
    if(!nom) return;
    const id='c'+(this.data.comptes.length+1);
    this.data.comptes.push({id,nom,type:document.getElementById('new-compte-type').value,solde:parseFloat(document.getElementById('new-compte-solde').value)||0,ordre:this.data.comptes.length+1,favori:document.getElementById('new-compte-favori').checked});
    this.save(); this.closeModal('modal-compte'); this.renderComptes();
  },

  editCompte(id) {
    const c=this.data.comptes.find(c=>c.id===id);
    if(!c) return;
    const nom=prompt('Nom du compte :',c.nom);
    if(nom){c.nom=nom;this.save();this.renderComptes();}
  },

  deleteCompte(id) {
    if(!confirm('Supprimer ce compte ?')) return;
    this.data.comptes=this.data.comptes.filter(c=>c.id!==id);
    this.save(); this.renderComptes();
  },

  openAddValuation() {
    const today=new Date().toISOString().slice(0,10);
    document.getElementById('val-date').value=today;
    document.getElementById('val-valeur').value='';
    document.getElementById('val-versement').value='';
    document.getElementById('val-notes').value='';
    this.openModal('modal-valuation');
  },

  saveValuation() {
    const date=document.getElementById('val-date').value;
    const valeur=parseFloat(document.getElementById('val-valeur').value)||0;
    const versement=parseFloat(document.getElementById('val-versement').value)||0;
    const notes=document.getElementById('val-notes').value;
    if(!date||!valeur){ alert('Date et valeur obligatoires'); return; }
    const lastInvesti=this.data.investissements.length?this.data.investissements[this.data.investissements.length-1].montantInvesti:0;
    this.data.investissements.push({date,valeurActuelle:valeur,montantInvesti:lastInvesti+versement,notes});
    this.save(); this.closeModal('modal-valuation'); this.renderInvestissements();
  },

  openModal(id){ document.getElementById(id).classList.add('open'); },
  closeModal(id){ document.getElementById(id).classList.remove('open'); },

  showToast(msg, color='green') {
    const t=document.createElement('div');
    t.style.cssText=`position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:${color==='green'?'var(--green)':'var(--red)'};color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;font-weight:500;z-index:9999;box-shadow:var(--sh-md)`;
    t.textContent=msg; document.body.appendChild(t);
    setTimeout(()=>t.remove(),2500);
  }
};

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(el=>el.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');}));

// Init
APP.init();
