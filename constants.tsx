import React from 'react';
import { Activity, Zap, Smile, Brain, BookOpen } from 'lucide-react';
import { SubjectMap, CheckboxType } from './types';

export const CHECKBOX_TYPES: CheckboxType[] = ["Heard", "Studied", "Solved", "Rev 1", "Rev 2"];

export const SUBJECT_DATA: SubjectMap = {
  Surgery: {
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    icon: <Activity className="w-5 h-5" />,
    categories: {
      Lectures: [
        "Trauma Assessment", "Intro to Orthopedic Trauma", "Orthopedic Fractures & Complications", "Upper Limb Trauma 1", 
        "Upper Limb Trauma 2", "Lower Limb Trauma 1", "Lower Limb Trauma 2", "Thoracic Trauma", 
        "Abdominal & Pelvic Trauma 1", "Abdominal & Pelvic Trauma 2", "Acute Abdomen", "Acute Appendicitis", 
        "Complicated Diverticular Disease & PU", "Intestinal Obstruction 1", "Intestinal Obstruction 2", 
        "Intestinal Anastomosis & Stomas", "Melanoma & Non-melanoma Skin Cancer", "Thyroid Carcinoma", 
        "Colorectal Carcinoma", "Esophageal Carcinoma", "Gastric Carcinoma", "Pancreatic Cyst & Carcinoma", 
        "Principles of General Anesthesia", "Principles of Regional Anesthesia", "Post-operative Pain Management"
      ],
      Seminars: ["Trauma Case", "Acute Abdomen Case", "Intestinal Obstruction Case", "Thyroid Cancer Case"],
      Clinical: [
        "Hx & Ex of Polytrauma (1ry & 2ry Surveys)", "Hx & Ex of Abdominal Pain I", "Hx & Ex of Abdominal Pain II", 
        "Radiology in UL Trauma 1", "Radiology in UL Trauma 2", "Radiology in LL Trauma 1", 
        "Radiology in LL Trauma 2", "Cutaneous Ulcer Examination", "Thyroid Hx & Examination"
      ],
      Skills: ["Casting"]
    }
  },
  Medicine: {
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    icon: <Zap className="w-5 h-5" />,
    categories: {
      Lectures: [
        "ICU Structure, MDT & Triage", "Shock", "Haemodynamic Monitoring", "Pulmonary Embolism", "Airway Management", 
        "Sepsis, MOF & ICU Infection Control", "Emergencies in Critical Care", "Respiratory Emergencies (ARDS & Pulm. Edema)", 
        "GIT Emergencies 1", "GIT Emergencies 2", "Diabetic Emergencies", "Other Endocrine Emergencies", 
        "Red Flags & Diagnostic Approaches in Oncology", "Cancer Screening & Prevention", "Principles of Chemotherapy", 
        "Lymphoma", "Non-Surgical Mgmt of Solid Tumors", "Chronic Leukemia", "Palliative Care in Cancer", 
        "Oncologic Emergencies", "Intro to Patient Safety", "Human Factors & Medical Error Prevention", 
        "Infection Prevention & Safe Clinical Practices", "Risk Reporting Systems", "Safe Prescribing"
      ],
      Seminars: ["ICU Case Discussion", "Lymphoma Case", "Chronic Leukemia Case", "Neutropenic Fever"],
      Clinical: [
        "ICU Orientation", "ICU Case Simulation (Teamwork)", "ICU Case Simulation (Hemodynamic)", 
        "Taking Oncological History", "Oncological Physical Examination", "Solid Tumor Case Discussion"
      ],
      Skills: ["BLS (Basic Life Support)", "ALS (Advanced Life Support)", "CVC (Central Venous Catheter)", "Hand Hygiene"]
    }
  },
  Psychiatry: {
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    icon: <Smile className="w-5 h-5" />,
    categories: {
      Lectures: [
        "Overview & Symptomatology", "Anxiety Disorders and OCD", "Somatic and Dissociative Disorders", 
        "Mood Disorders: Depression and Bipolar", "Schizophrenia Spectrum Disorders", "Personality Disorders & Substance Use", 
        "Other Psych (Delirium, Eating, Sleep)", "Child & Adolescent Psychiatry", "Pharm. & Non-pharm. TTT", "Emergency in Psychiatry"
      ],
      Seminars: ["Bipolar Disorder"],
      Clinical: [
        "History Taking (Psychiatry)", "Assessment of Mental State 1", "Assessment of Mental State 2", "Anxiety", 
        "Schizophrenia Spectrum Disorders", "Mood Disorders", "Eating Disorders", "Substance Use Disorders", 
        "Delirium", "Personality Disorders"
      ]
    }
  },
  Neurology: {
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    icon: <Brain className="w-5 h-5" />,
    categories: {
      Lectures: [
        "Introduction to Neurosciences 1", "Introduction to Neurosciences 2 (Physio)", "Stroke 1", "Stroke 2", 
        "Multiple Sclerosis", "Spinal Cord Disorders", "Epilepsy", "Peripheral Nerve Disease", "Muscle & Neuromuscular Dse", 
        "CNS Infections", "Dementia", "Movement Disorders (PD & Ataxia)"
      ],
      Seminars: ["Tremors, Ataxia & Motor Disorders", "Coma"],
      Clinical: [
        "History Taking", "General Exam, Intellectual & Speech", "Cranial Nerve Ex (I-VI)", "Cranial Nerve Ex (VII-XII)", 
        "Motor System Examination", "Sensory System, Co-ordination & Gait", "Hemiplegia & Paraplegia", 
        "Neuropathy & Myopathy", "PD & Ataxia", "Clinical Neuroradiology", "Clinical Neurology Revision"
      ]
    }
  },
  Dermatology: {
    color: "bg-rose-600",
    lightColor: "bg-rose-50",
    icon: <BookOpen className="w-5 h-5" />,
    categories: {
      Lectures: [
        "Intro to Derm & Skin Physiology", "Infectious Skin (Fungal)", "Infectious Skin (Viral)", "Infectious Skin (Bacterial)", 
        "Infectious Skin (Parasitic)", "Pigmentary Skin Disorders", "Papulosquamous Disorders", "Acne & Sebaceous Gland", 
        "Eczema", "Hair and Nail Disorders", "Autoimmune Skin Disorders", "Urticaria and Drug Reactions", 
        "Ulcers in Genital Area", "Syphilis", "Viral STDs in Men", "Urethral Discharge", "Male Infertility", "Erectile Dysfunction"
      ],
      Clinical: [
        "Fungal Infection", "Bacterial Infection", "Hx & Ex of Psoriasis", "Hx & Ex of Eczema", "Hx & Ex of Pigmentary (Vitiligo)", 
        "Hx & Ex of Acne Vulgaris", "Hx & Ex of Urticaria", "Hx & Ex of Skin Rash", "Hx & Ex of Hair & Nail", 
        "STIs in Males", "Infertility & Semen Analysis", "Erectile Dysfunction"
      ]
    }
  }
};