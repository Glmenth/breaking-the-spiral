export default function MedicalDisclaimer() {
  return (
    <div className="medical-disclaimer" style={{ 
      marginTop: '2rem', 
      fontSize: '0.85rem', 
      color: 'var(--text-muted, #666)', 
      borderTop: '1px solid var(--border-color, #eaeaea)', 
      paddingTop: '1.5rem', 
      textAlign: 'left',
      lineHeight: '1.5'
    }}>
      <strong>Medical Disclaimer:</strong> The founder is an MBCT-trained healthcare professional currently working within the NHS (UK). However, this site is a personal project and is independent of their role within the NHS. The views expressed here are their own and do not represent the official stance of the National Health Service. This content is for educational purposes and is not a substitute for individual clinical advice.
    </div>
  );
}
