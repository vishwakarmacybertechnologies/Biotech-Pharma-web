// Exhaustive Database of Generics Extracted from Laborate Catalog
const productsData = [
    // --- TABLETS (1 to 173) ---
    { sr: 1, name: 'Aceclofenac 100mg', packaging: '2x10', category: 'Tablets' },
    { sr: 2, name: 'Aceclofenac 100mg + Paracetamol 500 mg', packaging: '2x10', category: 'Tablets' },
    { sr: 3, name: 'Aceclofenac 100mg + Paracetamol 325mg + Chlorzoxazone 250mg', packaging: '2x10', category: 'Tablets' },
    { sr: 4, name: 'Aceclofenac 100mg + Paracetamol 500mg + Serratiopeptidase 10mg', packaging: '2x10', category: 'Tablets' },
    { sr: 5, name: 'Albendazole 200mg', packaging: '1x2', category: 'Tablets' },
    { sr: 6, name: 'Albendazole 400mg', packaging: '1x1', category: 'Tablets' },
    { sr: 7, name: 'Albendazole 400mg + Ivermectin 12mg', packaging: '1x1', category: 'Tablets' },
    { sr: 8, name: 'Amlodipine Besylate 5mg', packaging: '2x 14', category: 'Tablets' },
    { sr: 9, name: 'Amlodipine Besylate 10mg', packaging: '2x14', category: 'Tablets' },
    { sr: 10, name: 'Amlodipine 5mg + Atenolol 50mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 11, name: 'Amodiaquine 150mg', packaging: '1x3', category: 'Tablets' },
    { sr: 12, name: 'Amoxicillin 125mg (Dispersible Tablet)', packaging: '20 x 10', category: 'Tablets' },
    { sr: 13, name: 'Amoxicillin 250mg (Dispersible Tablet)', packaging: '20 x 10', category: 'Tablets' },
    { sr: 14, name: 'Amoxicillin 500mg (Dispersible Tablet)', packaging: '20 x 10', category: 'Tablets' },
    { sr: 15, name: 'Amoxicillin 1000mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 16, name: 'Amoxicillin 200mg + Clavulanate 28.5mg', packaging: '1x 10.', category: 'Tablets' },
    { sr: 17, name: 'Amoxicillin 250mg + Clavulanate 125mg', packaging: '1x10', category: 'Tablets' },
    { sr: 18, name: 'Amoxicillin 500mg + Clavulanate 125mg', packaging: '1x 10', category: 'Tablets' },
    { sr: 19, name: 'Amoxicillin 875mg + Clavulanate 125mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 20, name: 'Artemether 20mg + Lumefantrine 120mg', packaging: '1x6', category: 'Tablets' },
    { sr: 21, name: 'Artemether 40mg + Lumefantrine 240mg', packaging: '1x6', category: 'Tablets' },
    { sr: 22, name: 'Artemether 80mg + Lumefantrine 480mg', packaging: '1x6', category: 'Tablets' },
    { sr: 23, name: 'Atenolol 50mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 24, name: 'Atenolol 100mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 25, name: 'Atenolol 50mg+ Hydrochlorothiazide 25mg', packaging: '3x10', category: 'Tablets' },
    { sr: 26, name: 'Atorvastatin 10mg', packaging: '2x10', category: 'Tablets' },
    { sr: 27, name: 'Atorvastatin 20mg', packaging: '2x10', category: 'Tablets' },
    { sr: 28, name: 'Azithromycin 250mg', packaging: '2x10', category: 'Tablets' },
    { sr: 29, name: 'Azithromycin 500mg', packaging: '2x10', category: 'Tablets' },
    { sr: 30, name: 'Bisacodyl 5mg', packaging: '2x10', category: 'Tablets' },
    { sr: 31, name: 'Calcium carbonate 500mg + Vitamin D3 250IU', packaging: '1x2', category: 'Tablets' },
    { sr: 32, name: 'Cefadroxil 125 mg', packaging: '1x1', category: 'Tablets' },
    { sr: 33, name: 'Cefadroxil 250 mg', packaging: '1x1', category: 'Tablets' },
    { sr: 34, name: 'Cefadroxil 500 mg', packaging: '2x14', category: 'Tablets' },
    { sr: 35, name: 'Cefixime 100mg (Dispersible Tablet)', packaging: '2x14', category: 'Tablets' },
    { sr: 36, name: 'Cefixime 200mg (Dispersible Tablet)', packaging: '1 x 10', category: 'Tablets' },
    { sr: 37, name: 'Cefixime 200mg + Potassium Clavulanate 125mg', packaging: '1x3', category: 'Tablets' },
    { sr: 38, name: 'Cefpodoxime 100mg (Dispersible Tablet)', packaging: '20 x 10', category: 'Tablets' },
    { sr: 39, name: 'Cefpodoxime 200mg (Dispersible Tablet)', packaging: '20 x 10', category: 'Tablets' },
    { sr: 40, name: 'Cefpodoxime 200mg+ Clavulanic acid 125mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 41, name: 'Cefuroxime 250mg', packaging: '1x10', category: 'Tablets' },
    { sr: 42, name: 'Cefuroxime 500mg', packaging: '1 x 10.', category: 'Tablets' },
    { sr: 43, name: 'Cephalexin 125mg', packaging: '1x 10', category: 'Tablets' },
    { sr: 44, name: 'Cephalexin 250 mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 45, name: 'Cephalexin 500 mg', packaging: '1x10', category: 'Tablets' },
    { sr: 46, name: 'Cetrizine 10mg', packaging: '1x6', category: 'Tablets' },
    { sr: 47, name: 'Chlorphenamine Maleate 4mg', packaging: '1x6', category: 'Tablets' },
    { sr: 48, name: 'Ciprofloxacin 250mg', packaging: '1x6', category: 'Tablets' },
    { sr: 49, name: 'Ciprofloxacin 500mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 50, name: 'Ciprofloxacin 500mg + Ornidazole 500mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 51, name: 'Ciprofloxacin 500mg + Tinidazole 600mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 52, name: 'Citicoline 500mg', packaging: '2x10', category: 'Tablets' },
    { sr: 53, name: 'Kit of Clarithromycin 500mg + Metronidazole 500mg + Pantoprazole 20mg', packaging: '1x1', category: 'Tablets' },
    { sr: 54, name: 'Clotrimazole Vaginal Tablets 100mg', packaging: '1x6', category: 'Tablets' },
    { sr: 55, name: 'Clotrimazole Vaginal Tablets 200mg', packaging: '1x6', category: 'Tablets' },
    { sr: 56, name: 'Cyproheptadine 4mg', packaging: '1x30', category: 'Tablets' },
    { sr: 57, name: 'Cyproheptadine 4mg + Vitamin A 1600 IU+Vitamin D3 200 IU + Vitamin B1 2 mg+ Vitamin B2 2 mg+Vitamin B12 1 mcg + Nicotinaide 15mg+Calcium Pantothenate 5 mg + Calcium Lactate 100 mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 58, name: 'Desloratadine 5mg', packaging: '3x 10', category: 'Tablets' },
    { sr: 59, name: 'Dexamethasone 0.5mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 60, name: 'Gastro Resistant Diclofenac 50mg', packaging: '10x10', category: 'Tablets' },
    { sr: 61, name: 'Diclofenac 100mg (SR)', packaging: '2x 10', category: 'Tablets' },
    { sr: 62, name: 'Diclofenac Sodium 50 mg + Paracetamol 325 mg', packaging: '10 x 2 x 10', category: 'Tablets' },
    { sr: 63, name: 'Diclofenac 50mg + Paracetamol 500mg + Chlorzoxazone 250mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 64, name: 'Diclofenac 50mg + Magnesium Trisilicate 100mg + Chlorpheniramine 4mg + Paracetamol 325mg', packaging: '50x1x10', category: 'Tablets' },
    { sr: 65, name: 'Diclofenac Potassium 50mg + Paracetamol 325mg + Serratiopeptidase 10mg', packaging: '20 x 12', category: 'Tablets' },
    { sr: 66, name: 'Dicyclomine 20mg + Paracetamol 325mg', packaging: '2x10', category: 'Tablets' },
    { sr: 67, name: 'Doxycycline 100mg', packaging: '10x2x8', category: 'Tablets' },
    { sr: 68, name: 'Drotaverine 40mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 69, name: 'Elemental Iron 100mg + Folic Acid 350mcg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 70, name: 'Erythromycin Stearate 250mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 71, name: 'Erythromycin Stearate 500mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 72, name: 'Favipiravir 200 mg', packaging: '1x10', category: 'Tablets' },
    { sr: 73, name: 'Favipiravir 400 mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 74, name: 'Favipiravir 800 mg', packaging: '1x 10', category: 'Tablets' },
    { sr: 75, name: 'Famotidine 20mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 76, name: 'Famotidine 40mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 77, name: 'Fluconazole 150mg', packaging: '50 x 1 x 1', category: 'Tablets' },
    { sr: 78, name: 'Fluconazole 200mg', packaging: '20x1x4', category: 'Tablets' },
    { sr: 79, name: 'Folic Acid 5mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 80, name: 'Furazolidone 100mg + Metronidazole 300mg.', packaging: '20 x 10', category: 'Tablets' },
    { sr: 81, name: 'Furazolidone 100mg + Metronidazole 300mg + Dicyclomine 10mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 82, name: 'Glibenclamide 2mg + Metformin 500mg', packaging: '5x10', category: 'Tablets' },
    { sr: 83, name: 'Glimepride 2mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 84, name: 'Griseofulvin 250mg', packaging: '10x10', category: 'Tablets' },
    { sr: 85, name: 'Griseofulvin 500mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 86, name: 'Guaiphenesin 50mg + Paracetamol 325mg + Bromhexin 4mg + Phenylephrine 5mg + Chlorpheniramine Maleate 4mg', packaging: '25x10 Paper Strip', category: 'Tablets' },
    { sr: 87, name: 'Guaiphenesin 50mg + Paracetamol 325mg + Bromhexin 4mg + Phenylephrine 5mg + Chlorpheniramine Maleate 4mg', packaging: '1x4', category: 'Tablets' },
    { sr: 88, name: 'Hyocin Butylbromide 10mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 89, name: 'Ibuprofen 200', packaging: '2 x 10', category: 'Tablets' },
    { sr: 90, name: 'Ibuprofen 400mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 91, name: 'Ibuprofen 600mg', packaging: '2 x 10', category: 'Tablets' },
    { sr: 92, name: 'Ibuprofen 400mg + Paracetamol 325mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 93, name: 'Ibuprofen 400mg + Paracetamol 325mg + Famotidine 20mg', packaging: '2x10', category: 'Tablets' },
    { sr: 94, name: 'Ketoconazole 200mg', packaging: '1x10', category: 'Tablets' },
    { sr: 95, name: 'Ketorolac Tromethamine 10 mg', packaging: '2x 10.', category: 'Tablets' },
    { sr: 96, name: 'Levocetirizen Dihydrochloride 5mg', packaging: '1x 10', category: 'Tablets' },
    { sr: 97, name: 'Monteleukast 10mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 98, name: 'Levocetirizen Dihydrochloride 5mg + Monteleukast 10mg', packaging: '1x10', category: 'Tablets' },
    { sr: 99, name: 'Levocetirizine Hydrochloride 5 mg + Phenylephrine HCl 5 mg + Paracetamol 325 mg', packaging: '25x8', category: 'Tablets' },
    { sr: 100, name: 'Levofloxacin 500mg', packaging: '1x7', category: 'Tablets' },
    { sr: 101, name: 'Loperamide 2mg', packaging: '1x10', category: 'Tablets' },
    { sr: 102, name: 'Loratadine 10mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 103, name: 'Losartan Potassium 25 mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 104, name: 'Losartan Potassium 50 mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 105, name: 'Mebendazole 100mg', packaging: '1x6', category: 'Tablets' },
    { sr: 106, name: 'Mebeverine 135mg', packaging: '10x10', category: 'Tablets' },
    { sr: 107, name: 'Mecobalamine 500mcg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 108, name: 'Mefenamic 250mg', packaging: '2 x 10', category: 'Tablets' },
    { sr: 109, name: 'Mefenamic 500mg', packaging: '2x10', category: 'Tablets' },
    { sr: 110, name: 'Mefenamic Acid 250mg+ Dicyclomine HCl 10mg', packaging: '30 x 10', category: 'Tablets' },
    { sr: 111, name: 'Mefenamic Acid 250mg + Paracetamol 325mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 112, name: 'Meloxicam 15mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 113, name: 'Meloxicam 7.5mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 114, name: 'Metformin 500mg', packaging: '2x10', category: 'Tablets' },
    { sr: 115, name: 'Metformin Hydrochloride (Sustained Release) 500 mg + Glimepiride 1 mg', packaging: '2 x 10', category: 'Tablets' },
    { sr: 116, name: 'Metformin Hydrochloride (Sustained Release) 500 mg + Glimepiride 2 mg', packaging: '20 x 15', category: 'Tablets' },
    { sr: 117, name: 'Methyl Prednisolone 4mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 118, name: 'Methyl Prednisolone 8mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 119, name: 'Methyl Prednisolone 16mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 120, name: 'Metronidazole 250mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 121, name: 'Metronidazole 500mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 122, name: 'Moxifloxacin 400mg', packaging: '1x7', category: 'Tablets' },
    { sr: 123, name: 'Multivitamin + Multimineral (For Pregnancy)', packaging: '2x15', category: 'Tablets' },
    { sr: 124, name: 'Multivitamin Tablet', packaging: '10 x 3 x 12', category: 'Tablets' },
    { sr: 125, name: 'Nifedipine 20mg', packaging: '10x10', category: 'Tablets' },
    { sr: 126, name: 'Nimesulide 100mg', packaging: '20 x 15', category: 'Tablets' },
    { sr: 127, name: 'Nimesulide 100mg + Paracetamol 325mg', packaging: '30 x 10', category: 'Tablets' },
    { sr: 128, name: 'Nimesulide 100mg + Paracetamol 325mg+Tizanidine 2mg', packaging: '1x 10', category: 'Tablets' },
    { sr: 129, name: 'Nystatin Tablets 500000IU', packaging: '2x7', category: 'Tablets' },
    { sr: 130, name: 'Nystatin Vaginal Tablets 100000IU (with Appliator)', packaging: '2x7', category: 'Tablets' },
    { sr: 131, name: 'Ofloxacin 200mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 132, name: 'Ofloxacin 400mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 133, name: 'Ofloxacin 200 mg + Ornidazole 500mg', packaging: 'TX10', category: 'Tablets' },
    { sr: 134, name: 'Ofloxacin 200 mg + Tinidazole 600 mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 135, name: 'Olanzapine 10mg', packaging: '3 x 10', category: 'Tablets' },
    { sr: 136, name: 'Ondansetron 4mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 137, name: 'Orphenadrine Citrate 35mg + Paracetamol 450mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 138, name: 'Pantoprazole Delayed Release 20mg', packaging: '1x10', category: 'Tablets' },
    { sr: 139, name: 'Pantoprazole Delayed Release 40mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 140, name: 'Paracetamol 100mg', packaging: '10x10', category: 'Tablets' },
    { sr: 141, name: 'Paracetamol 500mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 142, name: 'Paracetamol 650 mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 143, name: 'Paracetamol 1000 mg', packaging: '1 x 12', category: 'Tablets' },
    { sr: 144, name: 'Paracetamol 650mg + Chlorphenamine 4mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 145, name: 'Paracetamol 450mg+Promethazine 5mg + Phenylephrine 5mg', packaging: '2 x 10', category: 'Tablets' },
    { sr: 146, name: 'Paracetamol 325mg + Phenylephrine Hydrochloride Smg + Caffeine 30mg + Diphenhydramine 25mg', packaging: '5x5 x 10', category: 'Tablets' },
    { sr: 147, name: 'Paracetamol 325mg + Phenylephrine HCl 5mg + Cetirizine 5mg', packaging: '20 x 10', category: 'Tablets' },
    { sr: 148, name: 'Paracetamol 325mg + Phenylephrine Hydrochloride 5mg + Caffeine 25mg + Chlorphenamine 2mg', packaging: '2x10', category: 'Tablets' },
    { sr: 149, name: 'Prednisolone 5mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 150, name: 'Prednisolone 10mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 151, name: 'Quinine Sulfate 300mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 152, name: 'Rabeprazole 20mg', packaging: '10x10', category: 'Tablets' },
    { sr: 153, name: 'Ranitidine 150mg', packaging: '2x10', category: 'Tablets' },
    { sr: 154, name: 'Ranitidine 300mg', packaging: '2 x 10', category: 'Tablets' },
    { sr: 155, name: 'Riboflavin Sod. Phosphate 5mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 156, name: 'Risperiodne 2mg', packaging: '10x10', category: 'Tablets' },
    { sr: 157, name: 'Risperiodne 4mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 158, name: 'Cefdinir 300mg + Potassium Clavulanate 125mg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 159, name: 'Sildenafil 50mg', packaging: '1x4', category: 'Tablets' },
    { sr: 160, name: 'Sildenafil 100mg', packaging: '1x4', category: 'Tablets' },
    { sr: 161, name: 'Sildenafil Citrate 50mg + Dapoxetine 30 mg', packaging: '1x4', category: 'Tablets' },
    { sr: 162, name: 'Spiramycin 750000IU + Metronidazole 125mg', packaging: '2x 10', category: 'Tablets' },
    { sr: 163, name: 'Sulfadoxine 500mg + Pyrimethamine 25mg', packaging: '50x1x3 Alu-Alu Strip', category: 'Tablets' },
    { sr: 164, name: 'Tadalafil 20mg', packaging: '1x4', category: 'Tablets' },
    { sr: 165, name: 'Tinidazole 500mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 166, name: 'Tramdol 37.5mg + Paracetamol 325mg', packaging: '1 x 15', category: 'Tablets' },
    { sr: 167, name: 'Trimethoprim 80 mg + Sulphamethoxazole 400 mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 168, name: 'Trimethoprim 160 mg + Sulphamethoxazole 800 mg', packaging: '10 x 10', category: 'Tablets' },
    { sr: 169, name: 'Vit. B1-200mg+B6-50mg+B12-1000mcg', packaging: '1 x 10', category: 'Tablets' },
    { sr: 170, name: 'Vitamin D3 5000IU', packaging: '60 Tablets in Jar', category: 'Tablets' },
    { sr: 171, name: 'Vitamin D3 10000IU', packaging: '30 Tablets in Jar', category: 'Tablets' },
    { sr: 172, name: 'Vitamin D3 50000IU', packaging: '10 Tablets in Jar', category: 'Tablets' },
    { sr: 173, name: 'Zinc Sulfate 20mg', packaging: '10 x 10', category: 'Tablets' },

    // --- CAPSULES (1 to 55) ---
    { sr: 1, name: 'Amoxicillin 250 mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 2, name: 'Amoxicillin 500mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 3, name: 'Amoxycillin 250mg + Dicloxacillin 250mg', packaging: '1 x 10', category: 'Capsules' },
    { sr: 4, name: 'Ampicillin 250mg + Cloxacillin 250mg', packaging: '1 x 10', category: 'Capsules' },
    { sr: 5, name: 'Ampicillin 250 mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 6, name: 'Ampicillin 500 mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 7, name: 'Cefalexin 250mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 8, name: 'Cefalexin 500mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 9, name: 'Cefdinir 300mg', packaging: '1x 10', category: 'Capsules' },
    { sr: 10, name: 'Cefixime 200mg', packaging: '1x6', category: 'Capsules' },
    { sr: 11, name: 'Cefixime 400mg', packaging: '1x6', category: 'Capsules' },
    { sr: 12, name: 'Chloramphenicol 250mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 13, name: 'Chloramphenicol 500mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 14, name: 'Clindamycin 150mg', packaging: '1x10', category: 'Capsules' },
    { sr: 15, name: 'Clindamycin 300mg', packaging: '1x10', category: 'Capsules' },
    { sr: 16, name: 'Clopidogrel 75mg + Atorvastatin 20mg + Aspirin75mg', packaging: '3 x 10', category: 'Capsules' },
    { sr: 17, name: 'Clopidogrel 75mg + Atorvastatin 10mg + Aspirin75mg', packaging: '3x10', category: 'Capsules' },
    { sr: 18, name: 'Cloxacillin 250mg', packaging: '1x10', category: 'Capsules' },
    { sr: 19, name: 'Cloxacillin 500mg', packaging: '1x10', category: 'Capsules' },
    { sr: 20, name: 'Dextromethorphan 15mg + Diphenhydramine 25mg + Nimesulide 100mg + Caffeine 30mg', packaging: '1 x 10', category: 'Capsules' },
    { sr: 21, name: 'Doxycycline 100mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 22, name: 'Doxycycline 100mg + Ambroxol 7.5mg', packaging: '30x10', category: 'Capsules' },
    { sr: 23, name: 'Esomeprazole 20mg', packaging: '2x7', category: 'Capsules' },
    { sr: 24, name: 'Esomeprazole 40mg', packaging: '2x7', category: 'Capsules' },
    { sr: 25, name: 'Esomeprazole 20mg & Domperdone 30mg', packaging: '2x10', category: 'Capsules' },
    { sr: 26, name: 'Ferrous Fumarate 200 mg Eq to elemental Iron 65 mg + Vitamin B12 100 mcg + Folic Acid 100mcg', packaging: '2x15', category: 'Capsules' },
    { sr: 27, name: 'Fluconazole 150mg', packaging: '1x1', category: 'Capsules' },
    { sr: 28, name: 'Fluconazole 200mg', packaging: '1x1', category: 'Capsules' },
    { sr: 29, name: 'Fluconazole 400mg', packaging: '1x1', category: 'Capsules' },
    { sr: 30, name: 'Fluoxitine 20mg', packaging: '1x10', category: 'Capsules' },
    { sr: 31, name: 'Furazolidone 100mg', packaging: '1 x 10', category: 'Capsules' },
    { sr: 32, name: 'Gabapentin 300mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 33, name: 'Ibuprofen 200mg + Paracetamol 325mg & Caffeine 30mg', packaging: '2x10', category: 'Capsules' },
    { sr: 34, name: 'Indometacin 25mg', packaging: '10x10', category: 'Capsules' },
    { sr: 35, name: 'Itraconazole 100 mg', packaging: '10x1x4', category: 'Capsules' },
    { sr: 36, name: 'Itraconazole 200 mg', packaging: '10x1x4', category: 'Capsules' },
    { sr: 37, name: 'Lansoprazole Delayed Release 30mg', packaging: '3x10', category: 'Capsules' },
    { sr: 38, name: 'Loperamide 2mg', packaging: '1x10', category: 'Capsules' },
    { sr: 39, name: 'Lycopene with Multivitamins & Multiminerals', packaging: '1 x 10', category: 'Capsules' },
    { sr: 40, name: 'Mefenamic Acid 500mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 41, name: 'Multivitamins + Multivitamins + Ginseng', packaging: '10 x 3 x 10', category: 'Capsules' },
    { sr: 42, name: 'Omeprazole Delayed Release 20mg', packaging: '1 x 14', category: 'Capsules' },
    { sr: 43, name: 'Omeprazole Delayed Release 40mg', packaging: '1x14', category: 'Capsules' },
    { sr: 44, name: 'Pantoprazole Sodium 40mg + Domperidone 30mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 45, name: 'Paracetamol 500mg + Caffeine 30mg', packaging: '2 x 10', category: 'Capsules' },
    { sr: 46, name: 'Piroxicam 20mg', packaging: '1x10', category: 'Capsules' },
    { sr: 47, name: 'Pregabalin 75mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 48, name: 'Pregabalin 75mg + Methylcobalamin 750mcg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 49, name: 'Tamsulosin 0.4mg (Prolonged Release)', packaging: '3 x 10', category: 'Capsules' },
    { sr: 50, name: 'Rabeprazole 20mg + Domperidone 30mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 51, name: 'Rifampicin 300mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 52, name: 'Tetrcycline 250mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 53, name: 'Tetracycline 500mg', packaging: '10 x 10', category: 'Capsules' },
    { sr: 54, name: 'Tramadol 37.5mg + Paracetamol 325mg', packaging: '1 x 10.', category: 'Capsules' },
    { sr: 55, name: 'Tramadol 50 mg', packaging: '10 x 10', category: 'Capsules' },

    // --- DRY INJECTIONS (1-33) ---
    { sr: 1, name: 'Amoxicillin 500mg', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 2, name: 'Amoxicillin 1000mg', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 3, name: 'Amoxicillin 500mg + Clavulanic Acid 100mg', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 4, name: 'Amoxicillin 1g + Clavulanic Acid 200mg', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 5, name: 'Ampicillin 500mg', packaging: '50 Vials/Box', category: 'Injections' },
    { sr: 6, name: 'Ampicillin 1gm', packaging: '50 Vials/Box', category: 'Injections' },
    { sr: 7, name: 'Ampicillin 250mg + Cloxacillin 250mg', packaging: '50 Vials/Box', category: 'Injections' },
    { sr: 8, name: 'Artesunate 30mg', packaging: '1 Vial+Sod. Bicarbonate + Sod. Chloride', category: 'Injections' },
    { sr: 9, name: 'Artesunate 60mg', packaging: '1 Vial+Sod. Bicarbonate + Sod. Chloride', category: 'Injections' },
    { sr: 10, name: 'Artesunate 120mg', packaging: '1 Vial+Sod. Bicarbonate + Sod. Chloride', category: 'Injections' },
    { sr: 11, name: 'Artesunate 180mg', packaging: '1 Vial+Sod. Bicarbonate + Sod. Chloride', category: 'Injections' },
    { sr: 12, name: 'Artesunate 240mg', packaging: '1 Vial + Sod. Bicarbonate + Sod. Chloride', category: 'Injections' },
    { sr: 13, name: 'Cefoperazone 1gm', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 14, name: 'Cefoperazone 500mg + Sulbactam 500mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 15, name: 'Cefotaxime 250mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 16, name: 'Cefotaxime 500mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 17, name: 'Cefotaxime 1000 mg', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 18, name: 'Ceftazidime 1g', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 19, name: 'Ceftriaxone 250mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 20, name: 'Ceftriaxone 500mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 21, name: 'Ceftriaxone 1000mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 22, name: 'Ceftriaxone 1000mg + Tazobactam 125mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 23, name: 'Ceftriaxone 1g + Sulbactam 500mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 24, name: 'Chloramphenicol 1gm', packaging: '50 Vials/Box', category: 'Injections' },
    { sr: 25, name: 'Procaine Penicillin 3g + Benzyl Penicillin Sodium 0.6g', packaging: '10 Vials/Box', category: 'Injections' },
    { sr: 26, name: 'Hydrocortisone 100mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 27, name: 'Meropenam 500mg', packaging: '1 Vial + WFI', category: 'Injections' },
    { sr: 28, name: 'Meropenem 1000mg', packaging: '1 Vial + WFT', category: 'Injections' },
    { sr: 29, name: 'Meropenem 1000mg + Sulbactam 500mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 30, name: 'Omperazole 40mg', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 31, name: 'Pantoprazole 40mg', packaging: '1 Vial+Sod. Chloride', category: 'Injections' },
    { sr: 32, name: 'Piperacillin 4gm + Tazobactum 0.5gm', packaging: '1 Vial+WFI', category: 'Injections' },
    { sr: 33, name: 'Rabeprazole 20 mg with WFI', packaging: '1 Vial+WFI', category: 'Injections' },
    
    // --- LIQUID INJECTIONS (1-53) ---
    { sr: 34, name: 'Adrenaline 1mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 35, name: 'Amikacin 100mg/2ml', packaging: '2 ml Vial', category: 'Injections' },
    { sr: 36, name: 'Amikacin 500mg/2ml', packaging: '2 ml Vial', category: 'Injections' },
    { sr: 37, name: 'Aminophylline 25mg/ml', packaging: '10x10ml Amp', category: 'Injections' },
    { sr: 38, name: 'Artemether 20mg/ml', packaging: '6x1ml Amp', category: 'Injections' },
    { sr: 39, name: 'Artemether 40mg/ml', packaging: '6x1ml Amp', category: 'Injections' },
    { sr: 40, name: 'Artemether 80mg/ml', packaging: '6x1ml Amp', category: 'Injections' },
    { sr: 41, name: 'Atropine 1mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 42, name: 'Betamethasone 4mg', packaging: '1 x 2ml Amp', category: 'Injections' },
    { sr: 43, name: 'Betamethasone Sod. Phosphate 2mg & Betamethasone Dipropionate 5mg', packaging: '1 x 2ml Amp', category: 'Injections' },
    { sr: 44, name: 'Chloroquine 200mg/5ml', packaging: '10x5ml Amp', category: 'Injections' },
    { sr: 45, name: 'Chlorphenamine 10mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 46, name: 'Chlorpromazine 25mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 47, name: 'Cimetidine 200mg/2ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 48, name: 'Clindamycin 150mg/ml', packaging: '1 ml Vial', category: 'Injections' },
    { sr: 49, name: 'Clindamycin 300mg/2ml', packaging: '2 ml Vial', category: 'Injections' },
    { sr: 50, name: 'Cyanocobalamin 1000mcg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 51, name: 'Dexamethasone 8mg/2ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 52, name: 'Diclofenac 25mg/ml', packaging: '10x3ml Amp', category: 'Injections' },
    { sr: 53, name: 'Diclofenac 75mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 54, name: 'Diclofenac 75mg + Lidocaine 20mg', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 55, name: 'Dipyrone 500mg/5ml', packaging: '10x5ml Amp', category: 'Injections' },
    { sr: 56, name: 'Vitamin B1 12mg, Vitamin B2 2mg, Vitamin B6 4400mcg, Vitamin B12 8mcg, Calcium Pantothenate 6mg, Nicotinamide 20mg', packaging: '10x2ml Amps', category: 'Injections' },
    { sr: 57, name: 'Ergometrine 0.2mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 58, name: 'Ergometrine 0.5 mg/m', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 59, name: 'Furosemide 10mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 60, name: 'Gentamicin 40 mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 61, name: 'Hyoscine Butylbromide 10mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 62, name: 'Hyoscine Butylbromide 20mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 63, name: 'Lidocaine 2% + Adrenaline', packaging: '30ml Vial', category: 'Injections' },
    { sr: 64, name: 'Lidocaine 2%', packaging: '50ml Vial', category: 'Injections' },
    { sr: 65, name: 'Lidocaine 20mg + Paracetamol 300mg', packaging: '5x3ml Amp', category: 'Injections' },
    { sr: 66, name: 'Lincomycin 300mg/ml', packaging: '5x2ml Amp', category: 'Injections' },
    { sr: 67, name: 'Meloxicam 15mg/1.5ml', packaging: '5x1.5ml Amp', category: 'Injections' },
    { sr: 68, name: 'Metoclopramide 10mg/2ml', packaging: '10x2ml Amps', category: 'Injections' },
    { sr: 69, name: 'Nandrolone Decanoate 25mg/ml', packaging: '1ml Amp + Dispovan', category: 'Injections' },
    { sr: 70, name: 'Nandrolone Decanoate 50mg/ml', packaging: '1ml Amp + Dispovan', category: 'Injections' },
    { sr: 71, name: 'Ondansetrone 4mg/2ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 72, name: 'Ondansetrone 8mg/4ml', packaging: '10x4ml Amp', category: 'Injections' },
    { sr: 73, name: 'Oxytocin 5IU/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 74, name: 'Oxytocin 10IU/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 75, name: 'Paracetamol 150mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 76, name: 'Paracetamol 600mg/5ml', packaging: '5x5ml Amps', category: 'Injections' },
    { sr: 77, name: 'Phytomenadione 2mg/0.2ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 78, name: 'Piroxicam 20mg/2ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 79, name: 'Promethazine 50mg/2ml', packaging: '10x2ml Amps', category: 'Injections' },
    { sr: 80, name: 'Pyridoxine 50mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 81, name: 'Quinine 300mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 82, name: 'Ranitidine 25mg/ml', packaging: '10x2ml Amp', category: 'Injections' },
    { sr: 83, name: 'Salbutamol 0.5 mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 84, name: 'Testosterone Enanthate 250mg/ml', packaging: '10x1ml Amp', category: 'Injections' },
    { sr: 85, name: 'Thiamine HCl 10 mg + Riboflavin 2 mg + Pyridoxine HCl 2 mg + Niacinamide 100 mg + D-Panthenol 5 mg + Benzyl Alcohol 2%', packaging: '25 x 10ml Vial', category: 'Injections' },
    { sr: 86, name: 'Thiamine Hydrochloride 100mg + Pyridoxine Hydrochloride 100mg & Cyanocobalamin 1000mcg', packaging: '10x3ml Amps', category: 'Injections' },
    
    // Liquid Injections (Continued 39-44 from column shift)
    { sr: 87, name: 'Tramadol 100mg/2ml', packaging: '10x2ml Amps', category: 'Injections' },
    { sr: 88, name: 'Vitamin D3 300000IU/ml', packaging: '1x1ml Amps', category: 'Injections' },
    { sr: 89, name: 'Vitamin D3 600000IU/2ml', packaging: '1x2ml Amps', category: 'Injections' },
    { sr: 90, name: 'Water For Injection 10ml', packaging: '50 x 5ml vial', category: 'Injections' },
    { sr: 91, name: 'Water For Injection 5ml', packaging: '50 x 5ml vial', category: 'Injections' },
    { sr: 92, name: 'a-Barteether 150mg/2ml', packaging: '10x2ml Amp', category: 'Injections' },

    // --- EYE DROPS (1 to 37) ---
    { sr: 1, name: 'Antazoline Phosphate 0.5%, Nepthazoline 0.05%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 2, name: 'Betamethasone 0.01%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 3, name: 'Betamethasone 0.01% & Neomycin 0.5%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 4, name: 'Carboxy Methylcellulose 0.5%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 5, name: 'Ciprofloxacin 0.3%', packaging: '25x1x10ml', category: 'Eye Drops' },
    { sr: 6, name: 'Ciprofloxacin 0.3% + Dexamethasone 0.05%', packaging: '25x1x10ml', category: 'Eye Drops' },
    { sr: 7, name: 'Ciprofloxacin 0.3% + Betamethasone 0.01%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 8, name: 'Ciprofloxacin 0.2% + Hydrocortisone 1%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 9, name: 'Chloramphenicol 0.5%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 10, name: 'Chloramphenicol 1%, Betamethasone 0.01%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 11, name: 'Dexamethasone 0.1%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 12, name: 'Gatifloxacin 0.3%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 13, name: 'Gatifloxacin 0.3%+ Prednisolone Acetate 1%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 14, name: 'Gentamicin 0.3%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 15, name: 'Gentamicin 0.3% + Betamethasone 0.01%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 16, name: 'Ketorolac Tromethamine 0.5%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 17, name: 'Latanoprost 50mcg', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 18, name: 'Latanoprost 50mcg, Timolol 5mg', packaging: '10x1x2.5ml', category: 'Eye Drops' },
    { sr: 19, name: 'Moxifloxacin 0.5%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 20, name: 'Moxifloxacin 0.5% & Dexamethasone 0.05%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 21, name: 'Nepafenac 0.1%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 22, name: 'Norfloxacin 0.3%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 23, name: 'Norfloxacin 0.3% + Dexamethasone 0.05%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 24, name: 'Ofloxacin 0.3%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 25, name: 'Ofloxacin 0.3%, Prednisolone Acetate 1%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 26, name: 'Ofloxacin 0.3% + Betamethasone 0.01%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 27, name: 'Olopatadine 0.2%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 28, name: 'Oxymetazoline 0.025%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 29, name: 'Oxymetazoline 0.05%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 30, name: 'Oxymetazoline 0.10%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 31, name: 'Paradichlorobenzene 2%, Benzocaine 2.7%, Chlorobutol 5%, Turpentine Oil 15%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 32, name: 'Sodium Chloride 5%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 33, name: 'Sulphacetamide Sodium 20%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 34, name: 'Tobramycin 0.3%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 35, name: 'Tobramycin 0.3% + Dexamethasone 0.05%', packaging: '10x1x10ml', category: 'Eye Drops' },
    { sr: 36, name: 'Timolol 0.5%', packaging: '10x1x5ml', category: 'Eye Drops' },
    { sr: 37, name: 'Xylometazoline 0.1%', packaging: '10x1x10ml', category: 'Eye Drops' },

    // --- SYRUPS (1 to 109) ---
    { sr: 1, name: 'Azithromycin 200mg/5ml', packaging: '30 ml', category: 'Syrup' },
    { sr: 2, name: 'Amoxicillin 100mg + Clavulanate 56.5mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 3, name: 'Amoxycillin 200mg + Clavulanate 28.5mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 4, name: 'Amoxycillin 250mg + Clavulanate 62.5mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 5, name: 'Amoxycillin 400mg + Clavulanate 57mg/5ml', packaging: '70 ml', category: 'Syrup' },
    { sr: 6, name: 'Amoxicillin 125mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 7, name: 'Amoxicillin 250mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 8, name: 'Cefadroxil 100 mg/ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 9, name: 'Cefadroxil 125 mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 10, name: 'Cefalexin 125mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 11, name: 'Cefalexin 250mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 12, name: 'Cefdinir 125mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 13, name: 'Cefixime 50mg/5ml', packaging: '60ml', category: 'Syrup' },
    { sr: 14, name: 'Cefixime 100mg/5ml', packaging: '60ml', category: 'Syrup' },
    { sr: 15, name: 'Cefixime Trihydrate 50 mg + Clavulanate 31.25 mg/5ml', packaging: '30 ml', category: 'Syrup' },
    { sr: 16, name: 'Cefpodoxime Proxetil 50mg/5ml', packaging: '30 ml', category: 'Syrup' },
    { sr: 17, name: 'Cefpodoxime Proxetil 100mg/5ml', packaging: '30 ml', category: 'Syrup' },
    { sr: 18, name: 'Cefpodoxime Proxetil 50mg + Clavulanic Acid 31.25 mg/5ml', packaging: '30 ml', category: 'Syrup' },
    { sr: 19, name: 'Cefpodoxime Proxetil 100mg + Clavulanic Acid 62.5 mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 20, name: 'Cefuroxime Axetil 125mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 21, name: 'Cloxacillin 125mg/5ml', packaging: '100ml', category: 'Syrup' },
    { sr: 22, name: 'Amoxycillin 125mg + Cloxacillin 125mg/5ml', packaging: '30 ml', category: 'Syrup' },
    { sr: 23, name: 'Erythromycin Estolate 125mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 24, name: 'Erythromycin Estolate 250mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 25, name: 'Albendazole 200mg', packaging: '20ml', category: 'Syrup' },
    { sr: 26, name: 'Albendazole 200 + Ivermectin 1.5 mg', packaging: '20ml', category: 'Syrup' },
    { sr: 27, name: 'Aceclofenac 50 mg + Paracetamol 125 mg', packaging: '60ml', category: 'Syrup' },
    { sr: 28, name: 'Ambroxol 15mg + Guaiphenesin 50mg + Phenylephrine 2.5mg + Chlorpheniramine Maleate 2mg + Menthol 1mg', packaging: '100 ml', category: 'Syrup' },
    { sr: 29, name: 'Ambroxol 30mg/5ml', packaging: '100 ml', category: 'Syrup' },
    { sr: 30, name: 'Ayurvedic Preparation', packaging: '130ml', category: 'Syrup' },
    { sr: 31, name: 'Azithromycin 100mg', packaging: '30ml', category: 'Syrup' },
    { sr: 32, name: 'Azithromycin 200mg', packaging: '30ml', category: 'Syrup' },
    { sr: 33, name: 'Bromhexine 8mg', packaging: '100ml', category: 'Syrup' },
    { sr: 34, name: 'Cetirizine 5mg', packaging: '30ml & 60ml', category: 'Syrup' },
    { sr: 35, name: 'Chlorphenamine Maleate 2mg + Dextromethorphan 10mg and Phenylephrine 5mg', packaging: '100 ml', category: 'Syrup' },
    { sr: 36, name: 'Chlorpheniramine 0.5mg + Acetaminophen 125mg+ Ascorbic acid 50mg', packaging: '100ml', category: 'Syrup' },
    { sr: 37, name: 'Chlorpheniramine Maleate 2mg + Dextromethorphan 10mg + Phenylephrine 5mg + Menthol 0.75mg', packaging: '60 ml', category: 'Syrup' },
    { sr: 38, name: 'Chlorpheniramine Maleate 4 mg + Dextromethorphan 10mg', packaging: '100 ml', category: 'Syrup' },
    { sr: 39, name: 'Citicoline Solution 500mg', packaging: '50ml & 100ml', category: 'Syrup' },
    { sr: 40, name: 'Co-trimoxazole Oral Suspension 240mg', packaging: '60ml & 100ml', category: 'Syrup' },
    { sr: 41, name: 'Co-trimoxazole Oral Suspension 480mg', packaging: '60ml & 100ml', category: 'Syrup' },
    { sr: 42, name: 'Cyproheptadine with B-complex Syrup', packaging: '120ml', category: 'Syrup' },
    { sr: 43, name: 'Cyproheptadine 2mg', packaging: '100ml', category: 'Syrup' },
    { sr: 44, name: 'Desloratadine 2.5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 45, name: 'Dexamethasone 0.5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 46, name: 'Dexamethasone 10mg + Chlorphenamine Maleate 40mg', packaging: '120ml', category: 'Syrup' },
    { sr: 47, name: 'Dextromethorphan 5mg + Bromhexine 4mg + Ammonium Chloride 50mg + Menthol 2.5mg', packaging: '100 ml', category: 'Syrup' },
    { sr: 48, name: 'Dextromethorphan HBr Syrup 5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 49, name: 'Dicyclomine 10mg + Dimethicone 40mg', packaging: '15ml + Dropper', category: 'Syrup' },
    { sr: 50, name: 'Diloxanide Furoate 250mg + Metronidazole 200mg/5ml', packaging: '100ml', category: 'Syrup' },
    { sr: 51, name: 'Dimethindine Maleate 1mg/ml Drops', packaging: '15ml', category: 'Syrup' },
    { sr: 52, name: 'Diphenhydramine 10mg', packaging: '100ml', category: 'Syrup' },
    { sr: 53, name: 'Diphenhydramine 13.5mg + Ammonium Chloride 131.5mg + Sodium Citrate 55mg & Menthol 1mg', packaging: '100ml', category: 'Syrup' },
    { sr: 54, name: 'Diphenhydramine 14.08 mg + Ammonium Chloride 0.138 g + Sodium Chloride 57.03 mg + Menthol 1.14 mg', packaging: '60 ml', category: 'Syrup' },
    { sr: 55, name: 'Diphenhydramine 7.5mg + Phenylepherine 5mg + Ammonium Chloride 62.5mg & Tolu 1.25gm', packaging: '100ml', category: 'Syrup' },
    { sr: 56, name: 'Domperidone 10mg', packaging: '100ml', category: 'Syrup' },
    { sr: 57, name: 'Dried Aluminium Hydroxide Gel 215mg + Magnesium Hydroxide 80mg & Simethicone 25mg Syrup', packaging: '170ml & 200ml', category: 'Syrup' },
    { sr: 58, name: 'Oxetacaine 10mg + Aluminium Hydroxide 380mg + Magnesium Hydroxide 98 mg', packaging: '170 ml', category: 'Syrup' },
    { sr: 59, name: 'Magaldrate 400mg & Simethicone 60mg', packaging: '170ml & 200ml', category: 'Syrup' },
    { sr: 60, name: 'Ferric Ammonium Citrate 110 mg + Folic Acid 1.5 mg + Cyanocobalamin 15mcg', packaging: '300 ml', category: 'Syrup' },
    { sr: 61, name: 'Fungal Diastase (1:800) 50 mg + Papain 60 mg', packaging: '200 ml', category: 'Syrup' },
    { sr: 62, name: 'Glyceryl Guaiacolate 50mg + chlorpheniramine 1mg & Phenylephrine HCl 2.5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 63, name: 'Ibuprofen 100mg', packaging: '100ml', category: 'Syrup' },
    { sr: 64, name: 'Ibuprofen 100mg + Paracetamol 162.5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 65, name: 'Iron (III) Hydroxide Polymaltose Complex equ. To Elemental Iron 50mg', packaging: '100ml', category: 'Syrup' },
    { sr: 66, name: 'Lactulose 3.35gm', packaging: '100ml', category: 'Syrup' },
    { sr: 67, name: 'Levocetirizine Dihydrochloride 2.5 mg', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 68, name: 'Loratadine 5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 69, name: 'Mebendazole 100mg', packaging: '30ml', category: 'Syrup' },
    { sr: 70, name: 'Mefenamic Acid 50mg + Paracetamol 125mg', packaging: '60ml', category: 'Syrup' },
    { sr: 71, name: 'Mefenamic Acid 50mg', packaging: '100ml', category: 'Syrup' },
    { sr: 72, name: 'Metoclopramide 5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 73, name: 'Metronidazole 100mg + Norfloxacin 100mg', packaging: '30ml & 60ml', category: 'Syrup' },
    { sr: 74, name: 'Metronidazole 50 mg + Norfloxacin 50mg + Simethicone 4 mg', packaging: '60ml & 100ml', category: 'Syrup' },
    { sr: 75, name: 'Metronidazole 125mg', packaging: '100ml', category: 'Syrup' },
    { sr: 76, name: 'Metronidazole 200mg', packaging: '100ml', category: 'Syrup' },
    { sr: 77, name: 'Montelukast 4mg + Levocetirizine 2.5 mg', packaging: '60 ml', category: 'Syrup' },
    { sr: 78, name: 'Multivitamin + Mineral + Iron Drops', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 79, name: 'Multivitamin Syrup', packaging: '100ml', category: 'Syrup' },
    { sr: 80, name: 'Nystatin Oral Drops 100000IU/ml', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 81, name: 'Ofloxacin 50mg', packaging: '30 ml', category: 'Syrup' },
    { sr: 82, name: 'Ofloxacin 50mg + Metronidazole 125mg', packaging: '30 ml', category: 'Syrup' },
    { sr: 83, name: 'Ofloxacin 50mg + Tinidazole 150mg', packaging: '30 ml', category: 'Syrup' },
    { sr: 84, name: 'Ofloxacin 50mg + Ornidazole 125mg', packaging: '30 ml', category: 'Syrup' },
    { sr: 85, name: 'Ondansetron 2mg', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 86, name: 'Paracetamol 100mg/ml', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 87, name: 'Paracetamol 120mg', packaging: '100ml', category: 'Syrup' },
    { sr: 88, name: 'Paracetamol 250mg', packaging: '100ml', category: 'Syrup' },
    { sr: 89, name: 'Paracetamol 125mg', packaging: '100ml', category: 'Syrup' },
    { sr: 90, name: 'Paracetamol 125mg + Phenylephrine 2.5mg + Cetirizine 2.5mg', packaging: '100ml', category: 'Syrup' },
    { sr: 91, name: 'Paracetamol 125mg + Phenylephrine 2.5mg + Cetirizine 2.5mg', packaging: '60ml', category: 'Syrup' },
    { sr: 92, name: 'Paracetamol 120 mg + Phenylephrine 5mg + Dextromethorphan HBr 7.5 mg', packaging: '100ml', category: 'Syrup' },
    { sr: 93, name: 'Pepsin 10mg & Diastase 50mg/10ml', packaging: '100ml & 200ml', category: 'Syrup' },
    { sr: 94, name: 'Quinine Hhlorhydrate 50 mg', packaging: '60 ml', category: 'Syrup' },
    { sr: 95, name: 'Quinine Hhlorhydrate 100 mg', packaging: '100ml', category: 'Syrup' },
    { sr: 96, name: 'Salbutamol 2mg + Bromhexine 4mg + Guaifenesin 100mg & Menthol 1mg', packaging: '60ml & 100ml', category: 'Syrup' },
    { sr: 97, name: 'Salbutamol 2mg/5ml', packaging: '60ml & 100ml', category: 'Syrup' },
    { sr: 98, name: 'Simethicone 2gm/30ml', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 99, name: 'Sodium Picosulfate 10mg/10ml', packaging: '15ml Drop', category: 'Syrup' },
    { sr: 100, name: 'Sucralfate 1g/10ml', packaging: '200 ml', category: 'Syrup' },
    { sr: 101, name: 'Terbutaline Sulphate 1.25 mg + Bromhexine 4 mg + Guaiphenesin 50mg + Menthol 2.5 mg/5ml', packaging: '60 ml', category: 'Syrup' },
    { sr: 102, name: 'Theophylline 50mg & Glycerol Guaicolate 30mg/5ml', packaging: '100ml', category: 'Syrup' },
    { sr: 103, name: 'Tulsi 50mg + Mulethi 50mg + Banaphsa 50mg + Kantkari 50mg + Tailaparna 50mg + Shunthi 25mg + Pippali 25mg + Vasaka 25mg + Shati 25mg + Pudina satva 3mg + Shuddh Madhu 1.75mg/5ml', packaging: '100ml', category: 'Syrup' },
    { sr: 104, name: 'Vitamin A 1500IU & D3 400IU Oral Drops', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 105, name: 'Vitamin A 1600 IU + Thiamine 1.5 mg + Riboflavine 1.2 mg + Cyanocobalamin 1 mcg + Nicotinamide 15mg + D-Panthenol 1mg + Zinc Sulphate 25mg + Lysine 10 mg/5ml', packaging: '200ml', category: 'Syrup' },
    { sr: 106, name: 'Vitamin B with Amino Acid & Silymarin Syrup', packaging: '200ml', category: 'Syrup' },
    { sr: 107, name: 'Vitamin D3 (Cholecalciferol) 200IU + Vitamin B12 2.5 mcg + Calcium Phosphate eq.to Elemental Calcium 82mg/5ml', packaging: '200ml', category: 'Syrup' },
    { sr: 108, name: 'Vitamin D3 Oral Drops 400IU/ml', packaging: '30ml + Dropper', category: 'Syrup' },
    { sr: 109, name: 'Zinc Sulphate 33 mg + Nicotinamide 50mg + Lysine 50 mg + D-Panthenol 5mg + Thiamine 5mg + Riboflavine 5mg + Pyridoxine 1.5mg + Vitamin A5000 IU + Cholecalciferol 400IU + Vitamin E 15 IU/5ml', packaging: '200ml', category: 'Syrup' },

    // --- OINTMENTS (1 to 61) ---
    { sr: 1, name: 'Aceclofenac 1% + Linseed Oil 3% + Methyl Salicylate 10% + Menthol 5% Cream', packaging: '30g', category: 'Ointment' },
    { sr: 2, name: 'Adapalene 0.05%+ Clindamycin 1.0% + Betamethasone valearte 0.05%', packaging: '30g', category: 'Ointment' },
    { sr: 3, name: 'Beclomethasone Dipropionate 0.025% + Clotrimazole 1% +Gentamicin 0.1% + Chlorocresol 0.1% Cream', packaging: '10g', category: 'Ointment' },
    { sr: 4, name: 'Benzoyl Peroxide 10% Gel', packaging: '30g', category: 'Ointment' },
    { sr: 5, name: 'Benzoyl Peroxide 5% Gel', packaging: '30g', category: 'Ointment' },
    { sr: 6, name: 'Betamethasone 0.1% & Neomycin Sulfate 0.5% Ointment', packaging: '15g', category: 'Ointment' },
    { sr: 7, name: 'Betamethasone 0.1% Cream', packaging: '15g', category: 'Ointment' },
    { sr: 8, name: 'Betamethasone 0.5mg + Gentamicin 1mg + Tolnaftate 10mg & Clioquinol 10mg Cream', packaging: '10x1x15gm & 10x1x30gm', category: 'Ointment' },
    { sr: 9, name: 'Ciprofloxacin 0.5% + Fluocinolone 0.025% + Clotrimazole 1% + Neamycin 0.5% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 10, name: 'Clindamycin 1% + Adapalene 0.1% Gel', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 11, name: 'Clindamycin 1% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 12, name: 'Clindamycin 1.0% + Nicotinamide 4.0% + Aloe 1.0%', packaging: '30g', category: 'Ointment' },
    { sr: 13, name: 'Clindamycin 2% Vaginal Gel', packaging: '40gm +6 Applicators', category: 'Ointment' },
    { sr: 14, name: 'Clobetasol 0.05% Cream', packaging: '10x1x25gm', category: 'Ointment' },
    { sr: 15, name: 'Clobetasol 0.05% Ointment', packaging: '10x1x25gm', category: 'Ointment' },
    { sr: 16, name: 'Clobeatsol Propionate 0.05% Gel', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 17, name: 'Clobetasol Propinonate 0.05% + Salicylic Acid 3.0% + Chlarocresol 0.1% Cream', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 18, name: 'Clobetasol Propionate 0.05%+ Ketoconazole 2% + Chlorocresol 0.1% Cream', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 19, name: 'Clobetasol Propionate 0.05%+ Neomycin 0.5% + Chlorocresol 0.1% Cream', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 20, name: 'Clobetasol Propionate 0.05% + Salicylic Acid 6.0% Cream', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 21, name: 'Clobetasol propionate 0.05% + Gentamicin 0.1% + Miconazole Nitrate 2% +Zinc oxide 2.5%+ Borax 0.05% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 22, name: 'Ketoconazole 2% + Tolnaftate 1% + Clobetasol 0.05% + Neomycin Sulphate 0.1% + lodochlohydroxyquinoline 1%', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 23, name: 'Clobetasole 0.05% + Neomycin sulphate 0.5% + Miconazole nitrate 2% + Zinc oxide 2.5% + Borax 0.05%', packaging: '300ml', category: 'Ointment' },
    { sr: 24, name: 'Clotrimazole 1% + Beclomethasone 0.025%+ Benzyl Alcohol 1% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 25, name: 'Clotrimazole 1% Cream', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 26, name: 'Clotrimazole 10mg/g Vaginal Cream', packaging: '40gm + Applicator', category: 'Ointment' },
    { sr: 27, name: 'Clotrimazole 2% + Tinidazole 5% Cream', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 28, name: 'Dexpanthenol 5% Cream', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 29, name: 'Dexpanthenol 5% Ointment', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 30, name: 'Diclofenac 1% Gel', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 31, name: 'Diclofenac 1.0% + Methyl Salicylate 8.0% & Menthol 2.0% Gel', packaging: '10x1x30gm & 10x1x50gm', category: 'Ointment' },
    { sr: 32, name: 'Diclofenac Diethylamine 1.16% + Methyl Salicylate 10% + Linseed oil 3% + Menthol 5% Cream', packaging: '10x1x55gm Spray', category: 'Ointment' },
    { sr: 33, name: 'Diclofenac Diethylamine 1.16% + Methyl Salicylate 10% + Linseed oil 3% + Menthol 5% Cream', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 34, name: 'Diclofenac Diethylamine 1.16% Cream', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 35, name: 'Flucinolone Acetonide 0.1mg + Menthol 2.5mg + Bismuth Subgallate 50mg & Lidocaine 20mg Cream', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 36, name: 'Fusidic Acid 20mg Cream', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 37, name: 'Gentamicin 3mg Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 38, name: 'Hydroquinone 2% + Tretinoin 0.025%+ Mometasone 0.1% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 39, name: 'Ketoconazole 2% Shampoo', packaging: '100ml', category: 'Ointment' },
    { sr: 40, name: 'Lidocaine 2% Gel', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 41, name: 'Lignocaine HCI 2% + Choline Salicylate 8.7% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 42, name: 'Mometasone Furoate 0.1% & Salicylic Acid 5% Ointment', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 43, name: 'Muprocin 2% Cream', packaging: '10x1x3gm', category: 'Ointment' },
    { sr: 44, name: 'Ofloxacin 0.75%+ Ornidazole 2% + Terbinafine 1% + Clobetasol Propionate 0.05% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 45, name: 'Permethrin 5% Cream', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 46, name: 'Povidone lodine 10% Topical Solution', packaging: '200ml', category: 'Ointment' },
    { sr: 47, name: 'Povidone lodine 5% Ointment', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 48, name: 'Povidone lodine 4% Topical Solution', packaging: '100ml Spray', category: 'Ointment' },
    { sr: 49, name: 'Povidone-lodine 5% + Sucralfate 7% Ointment', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 50, name: 'Retionoic Acid 0.025% Gel', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 51, name: 'Sildenafil Citrate 0.05% & Lignocaine 1.0% Gel', packaging: '10x1x30gm', category: 'Ointment' },
    { sr: 52, name: 'Silver Sulfadiazine 1% Cream', packaging: '10x1x40gm', category: 'Ointment' },
    { sr: 53, name: 'Silver Sulfadiazine 1.0% + Hyaluronic Acid Sodium 0.05% Cream', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 54, name: 'Sodium Fusidate 2% Ointment', packaging: '10x1x15gm', category: 'Ointment' },
    { sr: 55, name: 'Tacrolimus 1% Ointment', packaging: '10x1x20gm', category: 'Ointment' },
    { sr: 56, name: 'Tetracycline 3% Ointment', packaging: '10x1x15gm & 10x1x30gm', category: 'Ointment' },
    { sr: 57, name: 'Vaginal Wash', packaging: '200ml', category: 'Ointment' },
    { sr: 58, name: 'White Soft Petroleum Jelly', packaging: '12x50gm', category: 'Ointment' },
    { sr: 59, name: 'Clotrimazole 1% Powder', packaging: '1x100gm', category: 'Ointment' },
    { sr: 60, name: 'Calamine 8% + Diphenhydramine 1% + Camphor 0.1% Lotion', packaging: '1x60ml', category: 'Ointment' },
    { sr: 61, name: 'Povidone-lodine 5% Powder', packaging: '10x1x10gm', category: 'Ointment' }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Safe Mobile Menu Logic ---
    try {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        
        if(mobileBtn && navLinks) {
            mobileBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active-menu');
                mobileBtn.classList.toggle('active-menu');
                document.body.style.overflow = navLinks.classList.contains('active-menu') ? 'hidden' : 'auto';
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active-menu');
                    mobileBtn.classList.remove('active-menu');
                    document.body.style.overflow = 'auto';
                });
            });
        }
    } catch(e) { console.error("Menu error:", e); }

    // --- 2. Ultra-Smooth Header Scroll Effect ---
    const header = document.getElementById('navbar');
    let isScrolling = false;

    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    // --- Bulletproof Animation Observer ---
    try {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.1 });

        const slideElements = document.querySelectorAll('.slide-up');
        if (slideElements.length > 0) {
            slideElements.forEach(element => {
                observer.observe(element);
            });
        }
    } catch(e) { 
        console.error("Animation error, applying fallback:", e);
        document.querySelectorAll('.slide-up').forEach(el => el.classList.add('visible'));
    }

    // --- Product Catalog Logic ---
    try {
        const viewMainCategories = document.getElementById('view-main-categories');
        const viewPharmaSub = document.getElementById('view-pharma-subcategories');
        const viewProductTable = document.getElementById('view-product-table');
        const viewSurgicalPdfs = document.getElementById('view-surgical-pdfs');
        
        const btnPharma = document.getElementById('btn-pharma');
        const btnSurgicals = document.getElementById('btn-surgicals');
        const btnBackMainFromPharma = document.getElementById('back-to-main-from-pharma');
        const btnBackMainFromSurgical = document.getElementById('back-to-main-from-surgical');
        const btnBackSubcategories = document.getElementById('back-to-subcategories');
        const subCategoryCards = document.querySelectorAll('.sub-category-btn');
        
        const tableBody = document.getElementById('product-table-body');
        const currentCategoryTitle = document.getElementById('current-category-title');
        const searchInput = document.getElementById('productSearch');

        let currentSubCategory = 'Tablets';

        if (viewMainCategories) {
            
            if (btnPharma) {
                btnPharma.addEventListener('click', () => {
                    viewMainCategories.classList.add('view-hidden');
                    viewPharmaSub.classList.remove('view-hidden');
                    window.scrollTo({ top: viewPharmaSub.offsetTop - 100, behavior: 'smooth' });
                });
            }

            if (btnSurgicals) {
                btnSurgicals.addEventListener('click', () => {
                    viewMainCategories.classList.add('view-hidden');
                    viewSurgicalPdfs.classList.remove('view-hidden');
                    window.scrollTo({ top: viewSurgicalPdfs.offsetTop - 100, behavior: 'smooth' });
                });
            }

            if (btnBackMainFromPharma) {
                btnBackMainFromPharma.addEventListener('click', () => {
                    viewPharmaSub.classList.add('view-hidden');
                    viewMainCategories.classList.remove('view-hidden');
                });
            }

            if (btnBackMainFromSurgical) {
                btnBackMainFromSurgical.addEventListener('click', () => {
                    viewSurgicalPdfs.classList.add('view-hidden');
                    viewMainCategories.classList.remove('view-hidden');
                });
            }

            if (btnBackSubcategories) {
                btnBackSubcategories.addEventListener('click', () => {
                    viewProductTable.classList.add('view-hidden');
                    viewPharmaSub.classList.remove('view-hidden');
                    window.scrollTo({ top: viewPharmaSub.offsetTop - 100, behavior: 'smooth' });
                });
            }
            
            if (tableBody && viewProductTable) {
                function renderTable(data) {
    tableBody.innerHTML = '';
    if (data.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center" style="padding: 3rem 1rem;">No formulations found matching your search.</td></tr>';
        return;
    }
    
    data.forEach((product, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td style="color: #64748b; font-weight: 700; font-size: 0.9rem;">#${product.sr}</td>
            <td style="color: #0A192F; font-weight: 600; font-size: 1.1rem; line-height: 1.4;">${product.name}</td>
            <td style="color: #64748b; font-size: 0.95rem;">Packaging: <span style="color: #1e293b; font-weight: 500;">${product.packaging}</span></td>
            <td style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                <select id="qty-${index}" style="padding: 10px; border-radius: 6px; border: 1px solid var(--border-color); font-family: 'Inter', sans-serif; flex-grow: 1;">
                    <option value="1">1 Box</option>
                    <option value="2">2 Boxes</option>
                    <option value="3">3 Boxes</option>
                    <option value="4">4 Boxes</option>
                    <option value="5">5 Boxes</option>
                    <option value="6">6 Boxes</option>
                    <option value="7">7 Boxes</option>
                    <option value="8">8 Boxes</option>
                    <option value="9">9 Boxes</option>
                    <option value="10">10 Boxes</option>
                </select>
                <button class="btn btn-primary" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', '${product.packaging}', '${product.category}', 'qty-${index}')" style="padding: 10px 15px; font-size: 0.9rem; flex-grow: 2; border-radius: 6px;">Add to Cart</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}
                
                function filterData() {
                    if (!searchInput) return;
                    const searchTerm = searchInput.value.toLowerCase();
                    const filtered = productsData.filter(p => {
                        const matchesSearch = p.name.toLowerCase().includes(searchTerm);
                        const matchesCategory = p.category === currentSubCategory;
                        return matchesSearch && matchesCategory;
                    });
                    renderTable(filtered);
                }

                if (subCategoryCards.length > 0) {
                    subCategoryCards.forEach(card => {
                        card.addEventListener('click', () => {
                            currentSubCategory = card.getAttribute('data-category');
                            
                            if(currentCategoryTitle) {
                                currentCategoryTitle.innerText = currentSubCategory + " Division";
                            }
                            
                            if (searchInput) searchInput.value = '';
                            filterData();
                            
                            viewPharmaSub.classList.add('view-hidden');
                            viewProductTable.classList.remove('view-hidden');
                            
                            window.scrollTo({ top: viewProductTable.offsetTop - 100, behavior: 'smooth' });
                        });
                    });
                }
                
                if(searchInput) {
                    searchInput.addEventListener('input', filterData);
                }
            }
        }
    } catch(e) { console.error("Products Logic Error:", e); }
    
    // --- Animated Counters Fix ---
    try {
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length > 0) {
            const counterObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = +entry.target.getAttribute('data-target');
                        const duration = 2000; 
                        const increment = target / (duration / 16); 
                        let current = 0;
                        
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                entry.target.innerText = Math.ceil(current) + '+';
                                requestAnimationFrame(updateCounter);
                            } else {
                                entry.target.innerText = target + '+';
                            }
                        };
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => {
                counterObserver.observe(counter);
            });
        }
    } catch(e) { console.error("Counter error:", e); }
});

// --- NEW CART LOGIC ---
window.addToCart = function(name, packaging, category, selectId) {
    const qtyDropdown = document.getElementById(selectId);
    const quantity = qtyDropdown.value;
    const button = qtyDropdown.nextElementSibling;
    
    // બટન એનિમેશન
    const originalText = button.innerText;
    button.innerText = "Adding...";
    button.disabled = true;

    // ગ્રાહકના કાર્ટમાં ડેટા સેવ કરો (LocalStorage)
    let cart = JSON.parse(localStorage.getItem('biotechCart')) || [];
    
    // જો પ્રોડક્ટ પહેલેથી જ કાર્ટમાં હોય તો માત્ર Quantity પ્લસ કરો
    let existingItem = cart.find(item => item.name === name);
    if(existingItem) {
        existingItem.quantity = parseInt(existingItem.quantity) + parseInt(quantity);
    } else {
        cart.push({ name, packaging, category, quantity });
    }
    
    localStorage.setItem('biotechCart', JSON.stringify(cart));

    // Success બતાવો
    setTimeout(() => {
        button.style.backgroundColor = "#16BE45"; 
        button.innerText = "Added ✓";
        
        setTimeout(() => {
            button.style.backgroundColor = "";
            button.innerText = originalText;
            button.disabled = false;
            qtyDropdown.value = "1";
        }, 1500);
    }, 400);
};