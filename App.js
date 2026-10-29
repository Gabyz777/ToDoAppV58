import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefaAtual.trim() !== '') {
      setListaTarefas([...listaTarefas, tarefaAtual.trim()]);
      setTarefaAtual('');
      setCount(count + 1);
    }
  };

  const removerTarefa = (iRemover) => {
    setListaTarefas(listaTarefas.filter((_, i) => i !== iRemover));
    setCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.corContainer}>
        <View style={styles.corVerm} />
        <View style={styles.corVer} />
        <View style={styles.corAzul} />
      </View>

      <Text style={styles.title}>Tarefas</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Digite a anotação..."
          placeholderTextColor="#94a3b8"
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />

        <View style={styles.colunaBotaoAdd}>
          <View style={styles.circuloContador}>
            <Text style={styles.textoContador}>{count}</Text>
          </View>
          <TouchableOpacity style={styles.botao} onPress={adicionarTarefa}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.rolagem} showsVerticalScrollIndicator={false}>
        {listaTarefas.map((tarefa, i) => (
          <View key={i} style={styles.tarefaItem}>
            <Text style={styles.textTarefa}>{tarefa}</Text>
            <TouchableOpacity
              style={styles.botaoRemov}
              onPress={() => removerTarefa(i)}
            >
              <Text style={styles.textBotaoRemov}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  corContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 16,
  },
  corVerm: {
    width: 12,
    height: 12,
    backgroundColor: '#ef4444',
    borderRadius: 6,
  },
  corVer: {
    width: 12,
    height: 12,
    backgroundColor: '#22c55e',
    borderRadius: 6,
  },
  corAzul: {
    width: 12,
    height: 12,
    backgroundColor: '#3b82f6',
    borderRadius: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginRight: 10,
    fontSize: 16,
    color: '#1e293b',
  },
  colunaBotaoAdd: {
    alignItems: 'center',
  },
  circuloContador: {
    backgroundColor: '#2f5af6',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  textoContador: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  botao: {
    backgroundColor: '#2f5af6',
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  rolagem: {
    flex: 1,
    width: '100%',
  },
  tarefaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    minHeight: 64,
  },
  textTarefa: {
    fontSize: 16,
    color: '#334155',
    flex: 1,
  },
  botaoRemov: {
    backgroundColor: '#fff0f3',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffd8e1',
    marginLeft: 10,
  },
  textBotaoRemov: {
    color: '#e53935',
    fontWeight: '500',
    fontSize: 14,
  },
});