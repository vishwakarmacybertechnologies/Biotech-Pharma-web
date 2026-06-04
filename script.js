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
    { sr: 37, name: 'Xylometazoline 0.1%', packaging: '10x1x10ml', category: 'Eye Drops' }
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

    // --- Safe Header Scroll Effect ---
    try {
        const header = document.getElementById('navbar');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    } catch(e) { console.error("Header scroll error:", e); }

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
                    
                    data.forEach(product => {
                        const tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td style="color: #64748b; font-weight: 700;">#${product.sr}</td>
                            <td style="color: #0A192F; font-weight: 600;">${product.name}</td>
                            <td style="color: #64748b;">${product.packaging}</td>
                            <td><span style="background: rgba(78, 230, 230, 0.15); color: var(--deep-navy); padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; border: 1px solid rgba(78, 230, 230, 0.5); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; white-space: nowrap;">${product.category}</span></td>
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