import { ToolDefinition } from './types';
import { WordCounterTool } from './WordCounterTool';
import { PasswordGeneratorTool } from './PasswordGeneratorTool';
/**
 * 🛠️ CENTRAL TOOLS REGISTRY
 * 
 * भविष्य में कोई भी नया टूल जोड़ने के लिए:
 * 1. src/tools/ में अपना टूल कॉम्पोनेंट बनाएं (उदा: QrCodeTool.tsx)
 * 2. यहाँ नीचे उस टूल की केवल 1 एन्ट्री जोड़ें!
 * 
 * बाकी सब (URL /tool/:slug, /tools डायरेक्टरी, SEO, ब्लॉग लिंकिंग) 
 * अपने आप ऑटोमैटिक काम करेगा!
 */
export const toolsRegistry: Record<string, ToolDefinition> = {
  'word-counter': {
    slug: 'word-counter',
    title: 'ऑनलाइन वर्ड और कैरेक्टर काउंटर (Word Counter)',
    shortTitle: 'वर्ड काउंटर टूल',
    description: 'अपने टेक्स्ट के शब्द, अक्षर (स्पेस सहित व रहित), पैराग्राफ और पढ़ने का समय तुरंत मापें। ब्लॉगिंग और एसईओ के लिए सर्वोत्तम।',
    icon: 'format_list_numbered',
    category: 'text',
    badge: 'लाइव & मुफ़्त',
    badgeColor: 'bg-emerald-500 text-white',
    blogSlug: 'word-counter-online-tool-guide',
    component: WordCounterTool,
  },
  'password-generator': {
    slug: 'password-generator',
    title: 'सुरक्षित पासवर्ड जनरेटर (Strong Password Generator)',
    shortTitle: 'पासवर्ड जनरेटर',
    description: 'हैकिंग और डेटा लीक से बचने के लिए अत्यधिक सुरक्षित, कस्टमाइज़्ड रैंडम पासवर्ड और पिन बनाएं।',
    icon: 'key',
    category: 'security',
    badge: 'लाइव & मुफ़्त',
    badgeColor: 'bg-emerald-500 text-white',
    blogSlug: '5-easy-steps-to-secure-home-wifi-network',
    component: PasswordGeneratorTool,
  },
};

export const getAllTools = (): ToolDefinition[] => Object.values(toolsRegistry);
export const getToolBySlug = (slug: string): ToolDefinition | undefined => toolsRegistry[slug];
