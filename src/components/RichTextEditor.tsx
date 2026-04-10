import React, { useRef, useEffect } from "react";
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  Heading1, 
  Heading2, 
  Type, 
  AlignLeft, 
  AlignCenter 
} from "lucide-react";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange, placeholder }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // Initialize content once or update if value changes externally (rarely used for active editors)
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value || "";
    }
  }, []);

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const ToolbarButton = ({ 
    onClick, 
    icon: Icon, 
    label 
  }: { 
    onClick: () => void; 
    icon: any; 
    label: string 
  }) => (
    <button
      type="button"
      onClick={onClick}
      className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent text-foreground/60 transition-all flex items-center justify-center gap-2 text-xs font-medium"
      title={label}
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  return (
    <div className="w-full border border-border rounded-2xl overflow-hidden bg-foreground/[0.02] transition-all focus-within:border-accent/40 focus-within:ring-1 focus-within:ring-accent/40">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-foreground/[0.03] border-b border-border">
        <div className="flex items-center gap-1 pr-2 border-r border-border/50">
          <ToolbarButton onClick={() => executeCommand("bold")} icon={Bold} label="Bold" />
          <ToolbarButton onClick={() => executeCommand("italic")} icon={Italic} label="Italic" />
          <ToolbarButton onClick={() => executeCommand("underline")} icon={Underline} label="Underline" />
        </div>
        
        <div className="flex items-center gap-1 px-2 border-r border-border/50">
          <ToolbarButton onClick={() => executeCommand("formatBlock", "h1")} icon={Heading1} label="Heading 1" />
          <ToolbarButton onClick={() => executeCommand("formatBlock", "h2")} icon={Heading2} label="Heading 2" />
          <ToolbarButton onClick={() => executeCommand("formatBlock", "p")} icon={Type} label="Normal Text" />
        </div>

        <div className="flex items-center gap-1 px-2 border-r border-border/50">
          <ToolbarButton onClick={() => executeCommand("insertUnorderedList")} icon={List} label="Bullet List" />
        </div>

        <div className="flex items-center gap-1 pl-2">
          <ToolbarButton onClick={() => executeCommand("justifyLeft")} icon={AlignLeft} label="Align Left" />
          <ToolbarButton onClick={() => executeCommand("justifyCenter")} icon={AlignCenter} label="Align Center" />
        </div>
      </div>

      {/* Editor Area with CSS Overrides for Lists */}
      <style dangerouslySetInnerHTML={{ __html: `
        .royal-editor-content ul { 
          list-style-type: disc !important; 
          padding-left: 1.5rem !important; 
          margin-bottom: 1rem !important;
        }
        .royal-editor-content ol { 
          list-style-type: decimal !important; 
          padding-left: 1.5rem !important; 
          margin-bottom: 1rem !important;
        }
        .royal-editor-content li { 
          display: list-item !important;
          margin-bottom: 0.25rem !important;
        }
      `}} />
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="w-full min-h-[300px] max-h-[500px] p-6 outline-none prose prose-invert prose-amber max-w-none text-foreground overflow-y-auto royal-editor-content"
        style={{
          minHeight: "300px",
          fontFamily: "var(--font-sans)",
        }}
      />
      
      {/* Placeholder Text logic (Native contentEditable doesn't have a placeholder attribute) */}
      {(!value || value === "<br>") && (
        <div className="absolute top-[85px] left-6 pointer-events-none text-foreground/20 font-sans italic">
          {placeholder || "Start writing your royal story..."}
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
