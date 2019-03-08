package br.com.daboiud.nataguava.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "user_company")
public class UserCompany {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    @JoinColumn(name="user_id")
    private User user;

    private String name;
    private String phone;
    private String description;
}
